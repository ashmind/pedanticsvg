define([
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
], function(CodeMirror, svgSchema, xmlHintKeys) {
    'use strict';

    return function(textarea) {
        return CodeMirror.fromTextArea(textarea, {
            mode:        'image/svg+xml',
            lineNumbers: true,
            extraKeys:   $.extend(xmlHintKeys, {
                Tab: function indentWithSpaces(cm) {
                    var indent = new Array(cm.getOption('indentUnit') + 1).join(' ');
                    if (cm.somethingSelected()) {
                        cm.indentSelection('add');
                    } else {
                        cm.replaceSelection(indent, 'end', '+input');
                    }
                }
            }),
            indentUnit:  2,
            tabSize:     2,
            autoCloseTags: true,
            autoCloseBrackets: true,
            hintOptions: { schemaInfo: svgSchema },
            gutters:     ['CodeMirror-linenumbers', 'CodeMirror-lint-markers']
        });
    };
});