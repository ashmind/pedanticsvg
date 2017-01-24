export default function(editor) {
    const codeKey = 'psvg.code';
    (function load() {
        const code = localStorage[codeKey];
        if (code)
            editor.code = code;
    })();

    editor.on('codechange', function save(code) {
        localStorage[codeKey] = code;
    });
}