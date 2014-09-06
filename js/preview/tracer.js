define(['app/services/linker', 'app/utils/jquery.svg'], function(linker) { 'use strict'; return function(editor, preview) {
    // TODO: move to CSS
    var highlightColor = '#daa520';
    var traces = {};

    var tracers = {
        tag: {
            trace: traceElement,
            untrace: untraceElement
        },
        'path-segment': {
            trace: tracePathSegment,
            untrace: untracePathSegment
        }
    };

    editor.on('astchange', processAst);
    function processAst(ast) {
        linker.annotate(ast.root);
    }

    editor.codeMirror.on('nodesInSelectionChanged', function(cm, nodeChange) {
        preview.getRootElement().then(function ($previewRoot) {
            updateTrace($previewRoot, nodeChange);
        }).catch(function(e) {
            if (window.console && window.console.error)
                window.console.error(e);
        });
    });

    function updateTrace($previewRoot, change) {
        /* jshint shadow:true */

        var removed = change.removed;
        for (var i = 0; i < removed.length; i++) {
            var id = removed[i].id;
            var tracer = tracers[removed[i].astNode.type];
            var trace = traces[id];
            if (!tracer || !trace)
                continue;

            tracer.untrace(trace);
            delete traces[id];
        }

        var added = change.added;
        for (var i = 0; i < added.length; i++) {
            var astNode = added[i].astNode;
            var tracer = tracers[astNode.type];
            if (!tracer)
                continue;

            traces[added[i].id] = tracer.trace($previewRoot, astNode);
        }
    }

    function traceElement($previewRoot, tag) {
        var $element = linker.findByAstNode($previewRoot, tag);
        if ($element.length === 0)
            return;

        var traceCss = getTraceCss($element);
        var savedCss = {
            fill: $element[0].style.fill,
            stroke: $element[0].style.stroke
        };

        $element.data('psvg.untrace', savedCss)
                .css(traceCss);
        return $element;
    }

    function untraceElement($element) {
        $element.css($element.data('psvg.untrace'));
    }

    function tracePathSegment($previewRoot, segment) {
        //console.log('trace ', segment.stringify());

        var parent = segment.parent;

        var $path = linker.findByAstNode($previewRoot, parent);
        if ($path.length === 0)
            return;

        var segmentIndexInTrace;
        var commonParentTraceKey = parent.id + '_segments';
        var trace = traces[commonParentTraceKey];
        if (!trace) {
            trace = {
                extraKey: commonParentTraceKey,
                segments: [segment]
            };
            segmentIndexInTrace = 0;
            traces[commonParentTraceKey] = trace;
            trace.$path = $path.clone()
                               .css(getTraceCss($path))
                               .appendTo($path.parent());
        }
        else {
            // insert segment in in a location based on its order
            var segments = trace.segments;
            if (segments[0].index > segment.index) {
                segments.unshift(segment);
            }
            else if (segments[segments.length - 1].index < segment.index) {
                segments.push(segment);
            }
            else {
                for (var i = 0; i < segments.length; i++) {
                    if (segments[i].index > segment.index) {
                        segments.splice(i, 0, segment);
                        break;
                    }
                }
            }
        }

        retracePathSegment(trace);
        return { trace: trace, segment: segment };
    }

    function untracePathSegment(traceAndSegment) {
        var trace = traceAndSegment.trace;
        var segment = traceAndSegment.segment;
        var segments = trace.segments;

        //console.log('untrace ', segment.stringify());
        for (var i = 0; i < segments.length; i++) {
            if (segments[i] === segment) {
                segments.splice(i, 1);
                break;
            }
        }

        if (segments.length === 0) {
            trace.$path.remove();
            delete traces[trace.extraKey];
            return;
        }

        retracePathSegment(trace);
    }

    function retracePathSegment(trace) {
        var start = trace.segments[0].startPoint();
        var d = 'M ' + start.x + ' ' + start.y;
        for (var i = 0; i < trace.segments.length; i++) {
            d += ' ' + trace.segments[i].toAbsolute().toSVG();
        }

        trace.$path.attr('d', d);
    }

    function getTraceCss($element) {
        var css = {};
        var currentStyle = $element[0].ownerDocument.defaultView.getComputedStyle($element[0]);
        if (currentStyle.fill !== 'none')
            css.fill = highlightColor;

        if (currentStyle.stroke !== 'none')
            css.stroke = highlightColor;

        if (!css.fill && !css.stroke) {
            // ¯\_(ツ)_/¯
            css.fill = highlightColor;
        }

        return css;
    }
};});