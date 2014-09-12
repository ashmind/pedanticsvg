define(['jquery', 'app/preview/linker', 'jquery-ui'], function($, linker) { 'use strict'; return function($preview) {
    var SVG_MEDIA_TYPE = 'image/svg+xml';

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

    var loadControl;
    var loadPromise;

    var manualSizeSet = false;

    var setupPromise = featureDetect().then(
        function() {
            setup();
        },
        function() {
            notSupported();
        }
    );

    function featureDetect() {
        return new Promise(function(resolve, reject) {
            $iframe[0].onload = function() {
                var contentType = $iframe[0].contentDocument.contentType || $iframe[0].contentDocument.mimeType;
                if (contentType !== SVG_MEDIA_TYPE) {
                    if (URL.revokeObjectURL)
                        URL.revokeObjectURL(lastUnreleasedUrl);
                    reject();
                    return;
                }

                resolve();
            };

            renderRaw('<svg xmlns="http://www.w3.org/2000/svg" />');
        });
    }

    function notSupported() {
        $iframe.replaceWith(
            '<div class="not-supported">'+
                '<h3>Preview not supported</h3>'+
                '<p>Unfortunately preview is not supported in your browser.</p>'+
                '<p>As of Sept 2014, latest Chrome and Firefox should do fine, but latest IE doesn\'t support it.</p>'+
            '</div>'
        );
        $iframe = undefined;
        autosize();
    }

    function setup() {
        $iframe[0].onload = function() {
            function done() {
                $iframe.removeClass('loading');
                if (loadControl)
                    loadControl.resolve();

                autosize();
            }

            var $root = getRootElementImmediate();
            if ($root.find('parsererror')) { // something failed?
                var stylesheetURL = new URL('css/preview-errors.css', document.baseURI);
                var $link = $('<link rel="stylesheet" href="' + stylesheetURL + '">');
                $link[0].onload = function() { done(); };
                $root.find('head,body').andSelf().eq(0).prepend($link);
                return;
            }

            done();
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
    }

    function render(svg, ast) {
        setupPromise.then(function() {
            setLoadPromise();

            svg = linker.annotate(svg, ast);
            renderRaw(svg);
        });
    }

    function renderRaw(svg) {
        var blob = new Blob([svg], {type: SVG_MEDIA_TYPE});
        var url = URL.createObjectURL(blob);
        $iframe.addClass('loading');
        $iframe[0].src = url;

        if (lastUnreleasedUrl)
            URL.revokeObjectURL(lastUnreleasedUrl);
        lastUnreleasedUrl = url;
    }

    function getRootElement() {
        if (!loadPromise)
            setLoadPromise();

        return loadPromise.then(function() {
            return getRootElementImmediate();
        });
    }

    function getRootElementImmediate() {
        return $($iframe[0].contentWindow.document.documentElement);
    }

    function setLoadPromise() {
        loadPromise = new Promise(function(resolve, reject) {
            loadControl = { resolve: resolve, reject: reject };
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

        var previewSize = getSize($preview);
        var auto;
        if ($iframe) {
            $wrapper.width(previewSize.width).height(previewSize.height);
            $iframe.width(previewSize.width).height(previewSize.height);

            var $svg = getRootElementImmediate();

            auto = getSize($svg);
            if ($wrapper.width() > auto.width)
                $wrapper.width(auto.width);

            if ($wrapper.height() > auto.height)
                $wrapper.height(auto.height);
        }
        else {
            // something failed
            $wrapper.css({ width: null, height: null });
            auto = getSize($wrapper);
        }

        showSize(auto.width, auto.height);
        $sizeMode[0].checked = false;
    }

    function getSize($element) {
        return { width: $element.width(), height: $element.height() };
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