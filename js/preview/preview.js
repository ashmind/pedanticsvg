import $ from 'jquery';
import linker from './linker.js';
import 'jquery-ui';
    
export default function($preview) {
    const SVG_MEDIA_TYPE = 'image/svg+xml';

    const $template = $preview.find('template');
    const $templateTarget = $template.parent();
    $(document.importNode($template[0].content, true))
        .appendTo($templateTarget);

    const $wrapper = $templateTarget.find('.wrapper');
    const $sizeText = $templateTarget.find('.size :first-child');
    const $sizeMode = $templateTarget.find('.size .mode');
    let $iframe = $templateTarget.find('iframe');
    const $iframeFix = $('<div>').addClass('iframe-fix').appendTo($wrapper);

    let lastUnreleasedUrl;

    let loadControl;
    let loadPromise;

    let manualSizeSet = false;

    let setupPromise = featureDetect().then(
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
                const contentType = $iframe[0].contentDocument.contentType || $iframe[0].contentDocument.mimeType;
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

            const $root = getRootElementImmediate();
            if ($root.find('parsererror')) { // something failed?
                const stylesheetURL = new URL('css/preview-errors.css', document.baseURI);
                const $link = $('<link rel="stylesheet" href="' + stylesheetURL + '">');
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
        const blob = new Blob([svg], {type: SVG_MEDIA_TYPE});
        const url = URL.createObjectURL(blob);
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

        let previewSize = getSize($preview);
        let auto;
        if ($iframe) {
            $wrapper.width(previewSize.width).height(previewSize.height);
            $iframe.width(previewSize.width).height(previewSize.height);

            const $svg = getRootElementImmediate();

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
        const wrapperWidth = $wrapper.width();
        const wrapperHeight = $wrapper.height();
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
}