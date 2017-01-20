define(['FileSaver', '/js/settings.js'], function(saveAs, settings) {
    'use strict';

    var tracing = settings('preview.tracing', true);
    return [
        {
            name:    'download',
            title:   'Download SVG',
            action:  download,
            section: 'code'
        },
        {
            name:    'tracing',
            title:   'Enable highlighting',
            section: 'preview',
            action:  toggleTracing,
            state:   tracing.value,
            type:    'toggle'
        }
    ];

    function download(editor) {
        var blob = new Blob([editor.code], { type: 'image/svg+xml' });
        saveAs(blob, 'pedantic.svg');
    }

    function toggleTracing() {
        tracing.value = !tracing.value;
        return tracing.value;
    }
});