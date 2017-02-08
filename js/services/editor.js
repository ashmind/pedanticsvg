import setupEvents from '../utils/setup-events.js';
import setupCodeMirror from './codemirror-setup.js';
import parse from '../parsing/parse-svg.js';
import refactorUI from './refactoring/ui-builder.js';

export default $editor => {
    let code;
    let ast;
    let errors;
    let getNodesInRanges;
    let firstParse = true;

    const service = setupEvents({}, [
        'codechange',
        'astchange',
        'errorchange'
    ]);

    service.on('subscribe', e => {
        // since service does not currently provide editable ast
        // as a property, this is the only way to get it to any new
        // subscribers
        if (e.name === 'astchange')
            e.handler.call(undefined, ast);
    });

    const cm = setupCodeMirror($editor[0]);
    cm.setOption('trackNodesInSelection', {
        getNodes: getNodesInSelection
    });
    cm.setOption('lint', {
        async: true,
        getAnnotations: (function processChange(_, updateLinting) {
            code = cm.getValue();
            parseCurrentCode(updateLinting);
            cm.refreshNodesInSelection();
            service.trigger('codechange', code);
        })
    });

    setupRefactorings();

    Object.defineProperty(service, 'code', {
        get: () => code,
        set: value => {
            if (value === code)
                return;

            code = value;
            parseCurrentCode();
            cm.setValue(code);
            service.trigger('codechange', code);
        }
    });
    Object.defineProperty(service, 'errors', {
        value: errors,
        writable: false
    });
    Object.defineProperty(service, 'codeMirror', {
        value: cm,
        writable: false
    });

    if (!code)
        code = cm.getValue();

    return service;

    function parseCurrentCode(updateLinting) {
        if (firstParse) {
            firstParse = false;
            if (code === '')
                return;
        }

        const parsed = parse(code);
        getNodesInRanges = parsed.getNodesInRanges;
        reportParseErrors(parsed.errors, updateLinting);

        errors = parsed.errors;
        service.trigger('errorchange', errors);

        ast = parsed.root;
        service.trigger('astchange', ast);
    }

    function reportParseErrors(errors, updateLinting) { // eslint-disable-line no-shadow
        if (!updateLinting)
            return;

        const cmErrors = errors.map(e => ({
            message: e.message,
            from: toCMPosition(e),
            to: toCMPosition(e)
        }));

        updateLinting(cm, cmErrors);
    }

    function getNodesInSelection(cm, selections) { // eslint-disable-line no-shadow
        if (!ast)
            return [];

        const ranges = [];
        for (const item of selections) {
            ranges.push({
                start: fromCMPosition(item.from()),
                end: fromCMPosition(item.to())
            });
        }
        const astNodes = getNodesInRanges(ranges);
        const mappedNodes = [];
        for (const astNode of astNodes) {
            mappedNodes.push({
                id: astNode.id,
                start: toCMPosition(astNode.start),
                end: toCMPosition(astNode.end),
                astNode
            });
        }
        return mappedNodes;
    }

    function setupRefactorings() {
        const activePoints = [];
        cm.on('nodesInSelectionChanged', (cm, e) => { // eslint-disable-line no-shadow
            const newGroups = {};
            const nodes = e.nodes;

            let newGroup;
            let newGroupEndIndex;
            for (const node of nodes) { 
                const astNode = node.astNode;
                if (newGroup && astNode.index === newGroupEndIndex + 1) {
                    newGroup.push(astNode);
                }
                else {
                    if (newGroup)
                        newGroups[newGroup[0].id] = newGroup;
                    newGroup = [astNode];
                }

                newGroupEndIndex = astNode.index;
            }
            if (newGroup)
                newGroups[newGroup[0].id] = newGroup;

            for (let i = 0; i < activePoints.length; i++) {
                const point = activePoints[i];
                let keep = false;
                const group = newGroups[point.startId];
                if (group) {
                    keep = refactorUI.updateWidget(point.$widget, group);
                    delete newGroups[point.startId];
                }

                if (!keep) {
                    point.mark.clear();
                    activePoints.splice(i, 1);
                    i -= 1;
                }
            }

            for (const id in newGroups) {
                const group = newGroups[id];
                const $widget = refactorUI.buildWidget(group, applyRefactoringChanges);
                if (!$widget)
                    continue;

                activePoints.push({
                    startId: id,
                    mark: cm.setBookmark(toCMPosition(group[0].start), {
                        widget: $widget[0]
                    }),
                    $widget
                });
            }
        });
    }

    function applyRefactoringChanges(changes) {
        cm.operation(() => {
            for (const change of changes) {
                change.startMarker = cm.setBookmark(toCMPosition(change.start));
                change.endMarker = cm.setBookmark(toCMPosition(change.end));
            }

            for (const change of changes) {
                const from = change.startMarker.find();
                const to = change.endMarker.find();
                cm.replaceRange(change.text, from, to);

                change.startMarker.clear();
                change.endMarker.clear();
            }
        });
        cm.focus();
    }

    function fromCMPosition(position) {
        return { line: position.line, column: position.ch };
    }

    function toCMPosition(position) {
        return { line: position.line, ch: position.column };
    }
};