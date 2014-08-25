define(['jquery'], function($) { 'use strict'; return function($preview) {
    var $iframe = $('<iframe>').appendTo($preview);
    var $size = $('<div>').addClass('size').appendTo($preview);
    var $sizeLabel = $('<div>').addClass('size-label').appendTo($size);

    var lastUnreleasedUrl;

    var loaded;
    var resolveLoaded;

    $iframe[0].onload = function() {
        if (resolveLoaded)
            resolveLoaded();

        updateSize();
    };

    $(window).resize(function() {
        updateSize();
    });

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
            return getRootElementImmediate();
        });
    }

    function getRootElementImmediate() {
        return $($iframe[0].contentWindow.document.documentElement);
    }

    function setLoadPromise() {
        loaded = new Promise(function(resolve) {
            resolveLoaded = resolve;
        });
    }

    function updateSize() {
        var $svg = getRootElementImmediate();
        var svgWidth = $svg.width();
        var svgHeight = $svg.height();

        var previewWidth = $preview.width();
        var previewHeight = $preview.height();

        $size.width(Math.min(svgWidth, previewWidth));
        $size.height(Math.min(svgHeight, previewHeight));

        $sizeLabel
            .toggleClass('inside', svgWidth >= previewWidth)
            .text(svgWidth + ' × ' + svgHeight);
    }

    return {
        render: render,
        getRootElement: getRootElement
    };
};});