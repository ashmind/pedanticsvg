import CodeMirror from 'codemirror';
import svgSchema from '/js/codemirror/svg-schema.js';
import 'codemirror/mode/xml/xml';
import '/js/codemirror/svg.js';
import '/js/codemirror/track-nodes.js';
import '/js/codemirror/show-hint-customized.js';
import '/js/codemirror/xml-hint-customized.js';
import '/js/codemirror/xml-hint-extra.js';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/lint/lint';

export default function(textarea) {
        return CodeMirror.fromTextArea(textarea, {
            mode:        'image/svg+xml',
            lineNumbers: true,
            extraKeys: {
                Tab: function indentWithSpaces(cm) {
                    let indent = new Array(cm.getOption('indentUnit') + 1).join(' ');
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
    }