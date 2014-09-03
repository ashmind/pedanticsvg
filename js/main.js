(function() {
    'use strict';
    var codeMirrorBase = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/4.2.0/';
    var config = {
        paths: {
            app:                          '../js',
            sax:                          '../external/sax',
            jquery:                       'https://code.jquery.com/jquery-2.0.3.min',
            'jquery-ui':                  'https://code.jquery.com/ui/1.11.1/jquery-ui.min',
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

require([
    'jquery',
    'app/open-on-drop',
    'app/services/editor',
    'app/preview/preview',
    'app/preview/tracer',
    'app/autosave',
    'app/services/settings',
    'jquery-ui'
], function($, openOnDrop, editorFactory, previewFactory, trace, autosave, settings) {
    'use strict';

    var editor = editorFactory($('#code'));
    var preview = previewFactory($('.preview .content .aligner'));
    openOnDrop($('body'), editor);
    autosave(editor);
    trace(editor, preview);

    editor.astchange(function(ast) {
        preview.render(ast.root.toSVG());
    });

    (function setupResize() {
        var $code = $('section.code');
        var width = settings.get('code.section.width');
        if (width)
            $code.css('width', width);

        $code.resizable({
            handles: 'e',
            stop: function(_, uie) {
                var percent = 100 * (uie.size.width / $(document).width());
                percent = (Math.round(percent * 100) / 100) + '%';
                uie.element.css('width', percent);
                settings.set('code.section.width', percent);
            }
        });
    })();

    //$('body').removeAttr('hidden');
});