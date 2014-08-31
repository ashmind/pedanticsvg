define([
    'jquery',
    'app/utils/eventLib',
    'app/services/codemirror-setup',
    'app/services/svg-parser',
    'app/services/refactoring/ui-builder'
], function($, event, setupCodeMirror, parse, buildRefactorWidget) { 'use strict'; return function($editor) {
    var ast;
    var code;

    var service = {
        astchange: event(),
        codechange: event()
    };

    service.astchange.onsubscribe = function() {
        // since service does not currently provide editable ast
        // as a property, this is the only way to get it to any new
        // subscribers
        service.astchange(ast);
    };

    var cm = setupCodeMirror($editor[0]);
    cm.setOption('trackNodesInSelection', {
        getNodes: getNodesInSelection
    });

    (function setupRefactorings() {
        var activePoints = {};
        cm.on('nodesInSelectionChanged', function(cm, e) {
            /* jshint shadow:true */
            for (var i = 0; i < e.removed.length; i++) {
                var id = e.removed[i].id;
                if (!activePoints[id])
                    continue;

                activePoints[id].clear();
                delete activePoints[id];
            }

            for (var i = 0; i < e.added.length; i++) {
                var node = e.added[i];
                var $widget = buildRefactorWidget(node.astNode, applyRefactoringResult);
                if (!$widget)
                    continue;

                activePoints[node.id] = cm.setBookmark(node.start, {
                    widget: $widget[0]
                });
            }
        });
    })();

    cm.setOption('lint', {
        async: true,
        getAnnotations: (function processChange(_, updateLinting) {
            code = cm.getValue();
            updateAstFromCode(updateLinting);
            cm.refreshNodesInSelection();
            service.codechange(code);
        })
    });

    Object.defineProperty(service, 'code', {
        get: function() { return code; },
        set: function(value) {
            if (value === code)
                return;

            code = value;
            updateAstFromCode();
            cm.setValue(code);
            service.codechange(code);
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
        service.astchange(ast);
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

    function applyRefactoringResult(result) {
        cm.replaceRange(
            result.text,
            toCMPosition(result.start),
            toCMPosition(result.end)
        );
        cm.focus();
    }

    function fromCMPosition(position) {
        return { line: position.line, column: position.ch };
    }

    function toCMPosition(position) {
        return { line: position.line, ch: position.column };
    }
};});