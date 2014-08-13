(function() {
    'use strict';
    var codeMirrorBase = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/4.2.0/';
    var config = {
        paths: {
            app:                          '../js',
            jquery:                       'https://code.jquery.com/jquery-2.0.3.min',
            codemirror:                   codeMirrorBase + 'codemirror',
            'codemirror/addon':           codeMirrorBase + 'addon'
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

require(['jquery', 'app/editorService', 'app/previewService'], function($, editorServiceFactory, previewServiceFactory) {
    'use strict';

    var editorService = editorServiceFactory($('#code'));
    var previewService = previewServiceFactory($('.preview .content'));

    previewService.render(editorService.code);
    editorService.codechange(function() {
        previewService.render(editorService.code);
    });
});