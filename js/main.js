/*(function() {
    'use strict';
    var codeMirrorBase = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/4.2.0/';
    var config = {
        paths: {
            sax:                          '././external/sax-customized',
            FileSaver:                    '././external/FileSaver',
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
})();*/


    import $ from 'jquery';
    import openOnDrop from './open-on-drop.js';
    import editorFactory from './services/editor.js';
    import previewFactory from './preview/preview.js';
    import trace from './preview/tracer.js';
    import buildCommands from './commands/ui.js';
    import autosave from './autosave.js';
    import settings from './settings.js';
    import 'jquery-ui';
    
    'use strict';

    var editor = editorFactory($('#code'));
    var preview = previewFactory($('.preview .content'));
    openOnDrop($('body'), editor);
    autosave(editor);
    trace(editor, preview);

    if (!editor.code)
        editor.code = $('#default').text();

    editor.on('astchange', function(ast) {
        preview.render(editor.code, ast);
    });

    buildCommands({
        code:    $('section.code .commands'),
        preview: $('section.preview .commands'),
    }, editor, preview);

    (function setupResize() {
        var $code = $('section.code');
        var width = settings('code.section.width');
        if (width.value)
            $code.css('width', width.value);

        $code.resizable({
            handles: 'e',
            stop: function(_, uie) {
                var percent = 100 * (uie.size.width / $(document).width());
                percent = (Math.round(percent * 100) / 100) + '%';
                uie.element.css('width', percent);
                width.value = percent;
            }
        });
    })();

    //$('body').removeAttr('hidden');