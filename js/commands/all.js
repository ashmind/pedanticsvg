import saveAs from 'FileSaver';
import settings from 'settings.js';

const tracing = settings('preview.tracing', true);

function download(editor) {
    const blob = new Blob([editor.code], { type: 'image/svg+xml' });
    saveAs(blob, 'pedantic.svg');
}

function toggleTracing() {
    tracing.value = !tracing.value;
    return tracing.value;
}

export default [
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