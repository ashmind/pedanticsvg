define([
    'jquery',
    'codemirror',
    'app/codemirror/svg-schema',
    'app/codemirror/xml-hint-keys',
    'codemirror/mode/xml',
    'app/codemirror/svg',
    'codemirror/addon/hint/show-hint',
    'codemirror/addon/hint/xml-hint',
    'codemirror/addon/edit/closetag',
    'codemirror/addon/edit/closebrackets'
], function($, CodeMirror, svgSchema, xmlHintKeys) { 'use strict'; return function($editor) {
    CodeMirror.fromTextArea($editor[0], {
        mode:        'image/svg+xml',
        lineNumbers: true,
        extraKeys:   $.extend(xmlHintKeys, { Tab: indentWithSpaces }),
        indentUnit:  2,
        tabSize:     2,
        autoCloseTags: true,
        autoCloseBrackets: true,
        hintOptions: { schemaInfo: svgSchema }
    });

    function indentWithSpaces(cm) {
        if (cm.somethingSelected()) {
            cm.indentSelection('add');
        } else {
            cm.replaceSelection(new Array(cm.getOption('indentUnit') + 1).join(' '), 'end', '+input');
        }
    }
};});