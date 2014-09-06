define([
    'jquery',
    'app/utils/setup-events',
    'app/services/codemirror-setup',
    'app/parsing/svg-parser',
    'app/services/refactoring/ui-builder'
], function($, setupEvents, setupCodeMirror, parse, refactorUI) { 'use strict'; return function($editor) {
    var ast;
    var code;

    var service = setupEvents({}, ['astchange', 'codechange']);
    service.on('subscribe', function(e) {
        // since service does not currently provide editable ast
        // as a property, this is the only way to get it to any new
        // subscribers
        if (e.name === 'astchange')
            e.handler.call(undefined, ast);
    });

    var cm = setupCodeMirror($editor[0]);
    cm.setOption('trackNodesInSelection', {
        getNodes: getNodesInSelection
    });
    cm.setOption('lint', {
        async: true,
        getAnnotations: (function processChange(_, updateLinting) {
            code = cm.getValue();
            updateAstFromCode(updateLinting);
            cm.refreshNodesInSelection();
            service.trigger('codechange', code);
        })
    });

    setupRefactorings();

    Object.defineProperty(service, 'code', {
        get: function() { return code; },
        set: function(value) {
            if (value === code)
                return;

            code = value;
            updateAstFromCode();
            cm.setValue(code);
            service.trigger('codechange', code);
        }
    });

    if (!code)
        code = cm.getValue();

    Object.defineProperty(service, 'codeMirror', {
        value: cm,
        writable: false
    });
    return service;

    function updateAstFromCode(updateLinting) {
        var parsed = parse(code);
        reportParseErrors(parsed.errors, updateLinting);
        if (parsed.errors.length > 0)
            return;

        ast = parsed;
        service.trigger('astchange', ast);
    }

    function reportParseErrors(errors, updateLinting) {
        if (!updateLinting)
            return;

        var cmErrors = errors.map(function(e) {
            return {
                message: e.message,
                from: toCMPosition(e),
                to: toCMPosition(e)
            };
        });

        updateLinting(cm, cmErrors);
    }

    function getNodesInSelection(cm, selections) {
        /* jshint shadow:true */

        if (!ast)
            return [];

        var ranges = [];
        for (var i = 0; i < selections.length; i++) {
            ranges.push({
                start: fromCMPosition(selections[i].from()),
                end: fromCMPosition(selections[i].to())
            });
        }
        var astNodes = ast.getNodesInRanges(ranges);
        var mappedNodes = [];
        for (var i = 0; i < astNodes.length; i++) {
            var astNode = astNodes[i];
            mappedNodes.push({
                id: astNode.id,
                start: toCMPosition(astNode.start),
                end: toCMPosition(astNode.end),
                astNode: astNode
            });
        }
        return mappedNodes;
    }

    function setupRefactorings() {
        var activePoints = [];
        cm.on('nodesInSelectionChanged', function(cm, e) {
            /* jshint shadow:true */
            var newGroups = {};
            var nodes = e.nodes;

            var newGroup;
            var newGroupEndIndex;
            for (var i = 0; i < nodes.length; i++) {
                var astNode = nodes[i].astNode;
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

            for (var i = 0; i < activePoints.length; i++) {
                var point = activePoints[i];
                var keep = false;
                var group = newGroups[point.startId];
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

            for (var id in newGroups) {
                var group = newGroups[id];
                var $widget = refactorUI.buildWidget(group, applyRefactoringChanges);
                if (!$widget)
                    continue;

                activePoints.push({
                    startId: id,
                    mark: cm.setBookmark(toCMPosition(group[0].start), {
                        widget: $widget[0]
                    }),
                    $widget: $widget
                });
            }
        });
    }

    function applyRefactoringChanges(changes) {
        cm.operation(function() {
            /* jshint shadow:true */

            for (var i = 0; i < changes.length; i++) {
                var change = changes[i];
                change.startMarker = cm.setBookmark(toCMPosition(change.start));
                change.endMarker = cm.setBookmark(toCMPosition(change.end));
            }

            for (var i = 0; i < changes.length; i++) {
                var change = changes[i];
                var from = change.startMarker.find();
                var to = change.endMarker.find();
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
};});