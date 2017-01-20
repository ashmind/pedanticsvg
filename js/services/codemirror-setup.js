define([
    'codemirror',
    '/js/codemirror/svg-schema.js',
    'codemirror/mode/xml/xml',
    '/js/codemirror/svg.js',
    '/js/codemirror/track-nodes.js',
    '/js/codemirror/show-hint-customized.js',
    '/js/codemirror/xml-hint-customized.js',
    '/js/codemirror/xml-hint-extra.js',
    'codemirror/addon/edit/closetag',
    'codemirror/addon/edit/closebrackets',
    'codemirror/addon/lint/lint',
], function(CodeMirror, svgSchema) {
    'use strict';

    return function(textarea) {
        return CodeMirror.fromTextArea(textarea, {
            mode:        'image/svg+xml',
            lineNumbers: true,
            extraKeys: {
                Tab: function indentWithSpaces(cm) {
                    var indent = new Array(cm.getOption('indentUnit') + 1).join(' ');
                    if (cm.somethingSelected()) {
                        cm.indentSelection('add');
                    } else {
                        cm.replaceSelection(indent, 'end', '+input');
                    }
                }
            },
            lineWrapping:   true,
            indentUnit:     2,
            tabSize:        2,
            autoCloseTags:  true,
            autoCloseBrackets: true,
            hintOptions:    { schemaInfo: svgSchema },
            xmlHintExtra:   true,
            gutters:        ['CodeMirror-linenumbers', 'CodeMirror-lint-markers']
        });
    };
});