define(function($) { 'use strict'; return function(editor) {
    var codeKey = 'psvg.code';
    (function load() {
        var code = localStorage[codeKey];
        if (code)
            editor.code = code;
    })();

    editor.codechange(function save(code) {
        localStorage[codeKey] = code;
    });
};});