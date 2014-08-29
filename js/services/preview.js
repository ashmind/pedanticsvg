define(['jquery', 'jquery-ui'], function($) { 'use strict'; return function($preview) {
    var $wrapper = $('<div>').addClass('wrapper').appendTo($preview);
    var $iframe = $('<iframe>').appendTo($wrapper);
    var $sizeLabel = $('<div>').addClass('size-label').appendTo($wrapper);

    var lastUnreleasedUrl;

    var loaded;
    var resolveLoaded;

    var manualSizeSet = false;

    $wrapper.append($('<div style="position: absolute; top:0; left:0; width: 100%; height: 100%">'));

    $iframe[0].onload = function() {
        if (resolveLoaded)
            resolveLoaded();

        autosize();
    };

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

        /*var previewWidth = $preview.width();
        var previewHeight = $preview.height();

        $size.width(Math.min(svgWidth, previewWidth))
             .height(Math.min(svgHeight, previewHeight))
             .toggleClass('fill', svgWidth >= previewWidth);*/

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

    /*function generateResizeHandles() {
        for (var x = -1; x <= 1; x++) {
            for (var y = -1; y <= 1; y++) {
                if (x === 0 && y === 0) continue;

                var css = { position: 'absolute' };
                if (x < 1)   css.left   = '-5px';
                if (y < 1)   css.top    = '-5px';
                if (x > -1)  css.right  = '-5px';
                if (y > -1)  css.bottom = '-5px';
                if (x !== 0) css.width  = '5px';
                if (y !== 0) css.height = '5px';
                if (x === 0) css.cursor = 'ns-resize';
                if (y === 0) css.cursor = 'ew-resize';

                $('<div>').css(css).appendTo($wrapper);
            }
        }
    }*/

    return {
        render: render,
        getRootElement: getRootElement
    };
};});