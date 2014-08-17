define(['jquery'], function($) { 'use strict'; return function($preview) {
    var $iframe = $('<iframe>').appendTo($preview);
    var lastUnreleasedUrl;

    var loaded;
    var resolveLoaded;

    $iframe[0].onload = function() {
        if (resolveLoaded)
            resolveLoaded();
    };

    function render(svg) {
        setLoadPromise();

        var blob = new Blob([svg], {type: 'image/svg+xml'});
        var url = URL.createObjectURL(blob);
        $iframe[0].src = url;

        if (lastUnreleasedUrl)
            URL.revokeObjectURL(lastUnreleasedUrl);
        lastUnreleasedUrl = url;
    }

    function getRootElement() {
        if (!loaded)
            setLoadPromise();

        return loaded.then(function() {
            return $($iframe[0].contentWindow.document.documentElement);
        });
    }

    function setLoadPromise() {
        loaded = new Promise(function(resolve) {
            resolveLoaded = resolve;
        });
    }

    return {
        render: render,
        getRootElement: getRootElement
    };
};});