define([
    'jquery',
    'app/utils/eventLib',
    'app/services/codemirror-setup',
    'app/services/svg-parser'
], function($, event, setupCodeMirror, parse) { 'use strict'; return function($editor) {
    var cursorMarker;
    var selectedNode;
    var ast;

    var service = {
        astchange: event(),
        codechange: event(),
        selectionchange: event(),
        
        changeAst: function(change) {
            change(ast);
            service.astchange(ast);
            updateCodeFromAst();
        }
    };

    var cm = setupCodeMirror($editor[0], function processChange(cm, updateLinting) {
        var code = cm.getValue();
        ast = parse(code);
        service.astchange(ast);        
        updateCursorMarker(cm);
        updateCodeFromAst();
    });

    cm.on('cursorActivity', function() {
        updateCursorMarker(cm);
    });

    if (!service.code)
        service.code = cm.getValue();

    return service;

    function updateCodeFromAst() {
        service.code = ast.stringify();
        service.codechange();
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