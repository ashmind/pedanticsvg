define([
    'jquery',
    'app/utils/eventLib',
    'app/services/codemirror-setup',
    'app/services/svg-parser'
], function($, event, setupCodeMirror, parse) { 'use strict'; return function($editor) {
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

    function fromCMPosition(position) {
        return { line: position.line, column: position.ch };
    }

    function toCMPosition(position) {
        return { line: position.line, ch: position.column };
    }
};});