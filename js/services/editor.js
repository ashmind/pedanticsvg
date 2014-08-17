define([
    'jquery',
    'app/utils/eventLib',
    'app/services/codemirror-setup',
    'app/services/svg-parser'
], function($, event, setupCodeMirror, parse) { 'use strict'; return function($editor) {
    var cursorMarker;
    var selectedNode;
    var ast;
    var code;

    var service = {
        astchange: event(),
        codechange: event(),
        selectionchange: event()
    };

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

    service.astchange.onsubscribe = function() {
        // since service does not currently provide editable ast
        // as a property, this is the only way to get it to any new
        // subscribers
        service.astchange(ast);
    };

    var cm = setupCodeMirror($editor[0], function processChange(cm, updateLinting) {
        code = cm.getValue();
        updateAstFromCode();
        updateCursorMarker(cm);
        service.codechange(code);
    });

    cm.on('cursorActivity', function() {
        updateCursorMarker(cm);
    });

    if (!code)
        code = cm.getValue();

    return service;

    function updateAstFromCode() {
        ast = parse(code);
        service.astchange(ast);
    }

    function updateCursorMarker(cm) {
        if (cursorMarker) {
            cursorMarker.clear();
            cursorMarker = null;
        }

        var cursor = cm.getCursor();
        var node = ast.getNodeAt(fromCMPosition(cursor));
        if (selectedNode !== node) {
            service.selectionchange({ astNodes: [node] });
            selectedNode = node;
        }

        if (!node)
            return;

        cursorMarker = cm.markText(toCMPosition(node.start), toCMPosition(node.end), {
            className: 'cursor-scope'
        });
    }

    function fromCMPosition(position) {
        return { line: position.line, column: position.ch };
    }

    function toCMPosition(position) {
        return { line: position.line, ch: position.column };
    }
};});