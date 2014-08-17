define(['jquery'], function($) { 'use strict'; return function($preview) {
    var $iframe = $('<iframe>').appendTo($preview);
    var lastUnreleasedUrl;
    var loaded;

    function render(svg) {
        var blob = new Blob([svg], {type: 'image/svg+xml'});
        var url = URL.createObjectURL(blob);
        loaded = new Promise(function(resolve) {
            $iframe[0].onload = function() { resolve(); };
        });
        $iframe[0].src = url;

        if (lastUnreleasedUrl)
            URL.revokeObjectURL(lastUnreleasedUrl);
        lastUnreleasedUrl = url;
    }

    function getRootElement() {
        return loaded.then(function() {
            return $($iframe[0].contentWindow.document.documentElement);
        });
    }

    return {
        render: render,
        getRootElement: getRootElement
    };
};});