(function() {
    'use strict';
    var codeMirrorBase = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/4.2.0/';
    var config = {
        paths: {
            app:                          '../js',
            sax:                          '../external/sax',
            jquery:                       'https://code.jquery.com/jquery-2.0.3.min',
            codemirror:                   codeMirrorBase + 'codemirror',
            'codemirror/addon':           codeMirrorBase + 'addon'
        },
        shim: {
            sax: { exports: 'sax' }
        },
        map: {
            '*': {
                'codemirror/../../lib/codemirror': 'codemirror',
                'codemirror/lib/codemirror': 'codemirror',
                'lib/codemirror': 'codemirror'
            }
        }
    };
    ['xml'].forEach(function(name) {
        var key = 'codemirror/mode/' + name;
        var namePath = name + '/' + name;

        config.paths[key] = codeMirrorBase + 'mode/' + namePath;
        config.map['*']['codemirror/' + namePath] = key;
    });
    require.config(config);
})();

require(['jquery', 'app/services/editor', 'app/services/preview', 'app/services/tracer'], function($, editorFactory, previewFactory, tracerFactory) {
    'use strict';

    var editor = editorFactory($('#code'));
    var preview = previewFactory($('.preview .content'));
    tracerFactory(editor, preview);

    preview.render(editor.code);
    editor.codechange(function() {
        preview.render(editor.code);
    });
});