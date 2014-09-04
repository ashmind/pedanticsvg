define(['FileSaver'], function(saveAs) {
    'use strict';

    return [
        { name: 'download', action: download, section: 'code' }
    ];

    function download(editor) {
        var blob = new Blob([editor.code], { type: 'image/svg+xml' });
        saveAs(blob, 'pedantic.svg');
    }
});