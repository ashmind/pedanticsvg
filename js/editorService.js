define([
    'jquery',
    'app/utils/eventLib',
    'codemirror',
    'app/codemirror/svg-schema',
    'app/codemirror/xml-hint-keys',
    'codemirror/mode/xml',
    'app/codemirror/svg',
    'codemirror/addon/hint/show-hint',
    'codemirror/addon/hint/xml-hint',
    'codemirror/addon/edit/closetag',
    'codemirror/addon/edit/closebrackets',
    'codemirror/addon/lint/lint',
], function($, event, CodeMirror, svgSchema, xmlHintKeys) { 'use strict'; return function($editor) {
    var service = {
        codechange: event()
    };

    var cm = CodeMirror.fromTextArea($editor[0], {
        mode:        'image/svg+xml',
        lineNumbers: true,
        extraKeys:   $.extend(xmlHintKeys, { Tab: indentWithSpaces }),
        indentUnit:  2,
        tabSize:     2,
        autoCloseTags: true,
        autoCloseBrackets: true,
        hintOptions: { schemaInfo: svgSchema },
        gutters:     ['CodeMirror-linenumbers', 'CodeMirror-lint-markers'],
        lint:        {
          async: true,
          getAnnotations: processChange
        }
    });

    if (!service.code)
        service.code = cm.getValue();

    function processChange(cm, updateLinting) {
        service.code = cm.getValue();
        service.codechange();
    }

    function indentWithSpaces(cm) {
        if (cm.somethingSelected()) {
            cm.indentSelection('add');
        } else {
            cm.replaceSelection(new Array(cm.getOption('indentUnit') + 1).join(' '), 'end', '+input');
        }
    }

    return service;
};});