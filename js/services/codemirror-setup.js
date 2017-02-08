import CodeMirror from 'codemirror';
import svgSchema from '../codemirror/svg-schema.js';
import 'codemirror/mode/xml/xml';
import '../codemirror/svg.js';
import '../codemirror/track-nodes.js';
import '../codemirror/show-hint-customized.js';
import '../codemirror/xml-hint-customized.js';
import '../codemirror/xml-hint-extra.js';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/lint/lint';

export default textarea => CodeMirror.fromTextArea(textarea, {
    mode:        'image/svg+xml',
    lineNumbers: true,
    extraKeys: {
        Tab: function indentWithSpaces(cm) {
            const indent = new Array(cm.getOption('indentUnit') + 1).join(' ');
            if (cm.somethingSelected()) {
                cm.indentSelection('add');
            }
            else {
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