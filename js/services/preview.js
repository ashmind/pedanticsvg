define(['jquery', 'jquery-ui'], function($) { 'use strict'; return function($preview) {
    var $wrapper = $('<div>').addClass('wrapper').appendTo($preview);
    var $iframe = $('<iframe>').appendTo($wrapper);
    var $sizeLabel = $('<div>').addClass('size-label').appendTo($wrapper);
    var $iframeFix = $('<div>').addClass('iframe-fix').appendTo($wrapper);

    var lastUnreleasedUrl;

    var loaded;
    var resolveLoaded;

    var manualSizeSet = false;

    $iframe[0].onload = function() {
        if (resolveLoaded)
            resolveLoaded();

        autosize();
    };

    $preview.mousedown(function() {
        $iframeFix.show();
    }).mouseup(function() {
        $iframeFix.hide();
    });

    $(window).resize(function() {
        autosize();
    });

    $wrapper.resizable({
        handles: 'all'
    }).on('resize', manualResize);

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

    function autosize() {
        if (manualSizeSet)
            return;

        var previewWidth = $preview.width();
        var previewHeight = $preview.height();
        $iframe.width(previewWidth)
               .height(previewHeight);

        var $svg = getRootElementImmediate();
        var svgWidth = $svg.width();
        var svgHeight = $svg.height();

        var iframeWidth = $iframe.width();
        if (iframeWidth > svgWidth) {
            $iframe.width(svgWidth);
            $wrapper.width(svgWidth);
        }

        var iframeHeight = $iframe.height();
        if (iframeHeight > svgHeight) {
            $iframe.height(svgHeight);
            $wrapper.height(svgHeight);
        }

        $sizeLabel.text(svgWidth + ' × ' + svgHeight);
    }

    function manualResize() {
        var wrapperWidth = $wrapper.width();
        var wrapperHeight = $wrapper.height();
        $iframe.width(wrapperWidth)
               .height(wrapperHeight);

        $sizeLabel.text(wrapperWidth + ' × ' + wrapperHeight);
        manualSizeSet = true;
    }

    return {
        render: render,
        getRootElement: getRootElement
    };
};});