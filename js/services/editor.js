define([
    'jquery',
    'app/utils/eventLib',
    'app/services/codemirror-setup',
    'app/services/ast'
], function($, event, setupCodeMirror, astFactory) { 'use strict'; return function($editor) {
    var ast = astFactory();
    var cursorMarker;
    var service = {
        codechange: event()
    };

    var cm = setupCodeMirror($editor[0], function processChange(cm, updateLinting) {
        var code = cm.getValue();
        service.code = code;
        ast.parse(code);
        updateCursorMarker(cm);
        service.codechange();
    });

    cm.on('cursorActivity', function() {
        updateCursorMarker(cm);
    });

    if (!service.code)
        service.code = cm.getValue();

    return service;

    function updateCursorMarker(cm) {
        if (cursorMarker) {
            cursorMarker.clear();
            cursorMarker = null;
        }

        var cursor = cm.getCursor();
        var node = ast.getNodeAt(fromCMPosition(cursor));
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