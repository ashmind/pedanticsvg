define(['jquery', 'jquery-ui'], function($) { 'use strict'; return function($preview) {
    var $template = $preview.find('template');
    var $templateTarget = $template.parent();
    $(document.importNode($template[0].content, true))
        .appendTo($templateTarget);

    var $wrapper = $templateTarget.find('.wrapper');
    var $sizeText = $templateTarget.find('.size :first-child');
    var $sizeMode = $templateTarget.find('.size .mode');
    var $iframe = $templateTarget.find('iframe');
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

    $(document).mousedown(function() {
        $iframeFix.show();
    }).mouseup(function() {
        $iframeFix.hide();
    });

    $(window).resize(function() {
        autosize();
    });

    $wrapper.resizable({ handles: 'all' })
            .on('resize', manualResize);

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

    $sizeMode.click(function() {
        manualSizeSet = this.checked;
        $wrapper.toggleClass('manual-size', manualSizeSet);
        if (!manualSizeSet)
            autosize();
    });

    function autosize() {
        if (manualSizeSet)
            return;

        var previewWidth = $preview.width();
        var previewHeight = $preview.height();
        $wrapper.width(previewWidth).height(previewHeight);
        $iframe.width(previewWidth).height(previewHeight);

        var $svg = getRootElementImmediate();
        var svgWidth = $svg.width();
        var svgHeight = $svg.height();

        if ($wrapper.width() > svgWidth)
            $wrapper.width(svgWidth);

        if ($wrapper.height() > svgHeight)
            $wrapper.height(svgHeight);

        showSize(svgWidth, svgHeight);
        $sizeMode[0].checked = false;
    }

    function manualResize() {
        var wrapperWidth = $wrapper.width();
        var wrapperHeight = $wrapper.height();
        $iframe.width(wrapperWidth)
               .height(wrapperHeight);

        showSize(wrapperWidth, wrapperHeight);
        if (!manualSizeSet) {
            $wrapper.addClass('manual-size');
            $sizeMode[0].checked = true;
        }

        manualSizeSet = true;
    }

    function showSize(width, height) {
        $sizeText.text(width + ' × ' + height);
    }

    return {
        render: render,
        getRootElement: getRootElement
    };
};});