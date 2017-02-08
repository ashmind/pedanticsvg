import settings from '../settings.js';
import linker from './linker.js';
import '../utils/jquery.svg.js';

export default (editor, preview) => {
    // TODO: move to CSS
    const highlightColor = '#daa520';
    const enabled = settings('preview.tracing', true);
    const traces = {};
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

    editor.codeMirror.on('nodesInSelectionChanged', (cm, nodeChange) => {
        getPreviewRoot().then($previewRoot => {
            if (enabled.value)
                updateTrace($previewRoot, nodeChange.added, nodeChange.removed);

            lastSelectionChange = nodeChange;
        });
    });

    enabled.watch(newValue => {
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

        getPreviewRoot().then(
            $previewRoot => updateTrace($previewRoot, add, remove)
        );
    });

    function getPreviewRoot() {
        return preview.getRootElement().catch(e => {
            if (window.console && window.console.error)
                window.console.error(e);
        });
    }

    function updateTrace($previewRoot, add, remove) {
        for (const item of remove) {
            const id = item.id;
            const tracer = tracers[item.astNode.type];
            const trace = traces[id];
            if (!tracer || !trace)
                continue;

            tracer.untrace(trace);
            delete traces[id];
        }

        for (const item of add) {
            const astNode = item.astNode;
            const tracer = tracers[astNode.type];
            if (!tracer)
                continue;

            traces[item.id] = tracer.trace($previewRoot, astNode);
        }
    }

    function traceElement($previewRoot, tag) {
        const $element = linker.findByAstNode($previewRoot, tag);
        if ($element.length === 0)
            return null;

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
            return null;

        const commonParentTraceKey = `${parent.id}_segments`;
        let trace = traces[commonParentTraceKey];
        if (!trace) {
            trace = {
                extraKey: commonParentTraceKey,
                segments: [segment]
            };
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
        return { trace, segment };
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
        let d = `M ${start.x} ${start.y}`;
        for (const item of trace.segments) {
            d += ` ${item.toAbsolute().toSVG()}`;
        }

        trace.$path.attr('d', d);
    }

    function getTraceCss($element) {
        const css = {};
        const currentStyle = $element[0].ownerDocument.defaultView.getComputedStyle($element[0]);
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
};