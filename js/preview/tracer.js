import settings from '/js/settings.js';
import linker from './linker.js';
import '/js/utils/jquery.svg.js';

export default function(editor, preview) {
    // TODO: move to CSS
    const highlightColor = '#daa520';
    const enabled = settings('preview.tracing', true);
    let traces = {};
    let lastSelectionChange;

    const tracers = {
        tag: {
            trace: traceElement,
            untrace: untraceElement
        },
        'path-segment': {
            trace: tracePathSegment,
            untrace: untracePathSegment
        }
    };

    editor.codeMirror.on('nodesInSelectionChanged', function(cm, nodeChange) {
        getPreviewRoot().then(function ($previewRoot) {
            if (enabled.value)
                updateTrace($previewRoot, nodeChange.added, nodeChange.removed);

            lastSelectionChange = nodeChange;
        });
    });

    enabled.watch(function(newValue) {
        if (!lastSelectionChange)
            return;

        let add = [];
        let remove = [];
        if (newValue) {
            add = lastSelectionChange.added;
        }
        else {
            // remove all
            remove = lastSelectionChange.added;
        }

        getPreviewRoot().then(function($previewRoot) {
            updateTrace($previewRoot, add, remove);
        });
    });

    function getPreviewRoot() {
        return preview.getRootElement().catch(function(e) {
            if (window.console && window.console.error)
                window.console.error(e);
        });
    }

    function updateTrace($previewRoot, add, remove) {
        /* jshint shadow:true */

        for (let i = 0; i < remove.length; i++) {
            const id = remove[i].id;
            const tracer = tracers[remove[i].astNode.type];
            const trace = traces[id];
            if (!tracer || !trace)
                continue;

            tracer.untrace(trace);
            delete traces[id];
        }

        for (let i = 0; i < add.length; i++) {
            const astNode = add[i].astNode;
            const tracer = tracers[astNode.type];
            if (!tracer)
                continue;

            traces[add[i].id] = tracer.trace($previewRoot, astNode);
        }
    }

    function traceElement($previewRoot, tag) {
        const $element = linker.findByAstNode($previewRoot, tag);
        if ($element.length === 0)
            return;

        const traceCss = getTraceCss($element);
        const savedCss = {
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

        const parent = segment.parent;

        const $path = linker.findByAstNode($previewRoot, parent);
        if ($path.length === 0)
            return;

        let segmentIndexInTrace;
        const commonParentTraceKey = parent.id + '_segments';
        let trace = traces[commonParentTraceKey];
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
            const segments = trace.segments;
            if (segments[0].index > segment.index) {
                segments.unshift(segment);
            }
            else if (segments[segments.length - 1].index < segment.index) {
                segments.push(segment);
            }
            else {
                for (let i = 0; i < segments.length; i++) {
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
        const trace = traceAndSegment.trace;
        const segment = traceAndSegment.segment;
        const segments = trace.segments;

        //console.log('untrace ', segment.stringify());
        for (let i = 0; i < segments.length; i++) {
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
        const start = trace.segments[0].startPoint();
        let d = 'M ' + start.x + ' ' + start.y;
        for (let i = 0; i < trace.segments.length; i++) {
            d += ' ' + trace.segments[i].toAbsolute().toSVG();
        }

        trace.$path.attr('d', d);
    }

    function getTraceCss($element) {
        let css = {};
        let currentStyle = $element[0].ownerDocument.defaultView.getComputedStyle($element[0]);
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
}