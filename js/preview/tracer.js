define(['app/services/svg-ast', 'app/services/linker', 'app/utils/jquery.svg'], function(astFactory, linker) { 'use strict'; return function(editor, preview) {
    var selectedClassName = 'psvg-selected';
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

    editor.astchange(processAst);
    function processAst(ast) {
        linker.annotate(ast.root);
        var parentTag = findFirstTag(ast.root);
        if (!parentTag)
            return;

        var style = astFactory.tag('style', null, [
            // TODO: move to CSS
            '.psvg-selected { fill: #daa520 !important; stroke: #daa520 !important; }'
        ]);
        parentTag.children.unshift(style);
    }

    function findFirstTag(astNode) {
        if (astNode.type === 'tag')
            return astNode;

        var children = astNode.children;
        if (!children)
            return;

        for (var i = 0; i < children.length; i++) {
            var tag = findFirstTag(children[i]);
            if (tag)
                return tag;
        }
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

        $element.svgAddClass(selectedClassName);
        return $element;
    }

    function untraceElement($element) {
        $element.svgRemoveClass(selectedClassName);
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
                               .svgAddClass(selectedClassName)
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
};});