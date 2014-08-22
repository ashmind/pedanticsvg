define(['app/services/linker', 'app/utils/jquery.svg'], function(linker) { 'use strict'; return function(editor, preview) {
    var selectedClassName = 'psvg-selected';
    var currentTrace = {
        styled: [],
        created: []
    };

    editor.astchange(processAst);
    function processAst(ast) {
        linker.annotate(ast.root);
        var parentTag = findFirstTag(ast.root);
        if (!parentTag)
            return;

        parentTag.children.unshift({
            type: 'tag',
            name: 'style',
            attributes: {},
            children: [
                // TODO: move to CSS
                '.psvg-selected { fill: #daa520 !important; stroke: #daa520 !important; }'
            ]
        });
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

    editor.selectionchange(function(selection) {
        preview.getRootElement().then(function ($previewRoot) {
            tracePreview($previewRoot, selection.astNodes);
        });
    });

    function tracePreview($previewRoot, astNodes) {
        var tracers = {
            tag: traceElement,
            'path-segment': tracePathSegment
        };

        //for (var i = 0; i < astNodes.length; i++) {
        var astNode = astNodes[0];
        if (currentTrace.astNode === astNode)
            return;

        clearCurrentTrace();
        var tracer = tracers[astNode.type];
        if (!tracer)
            return;

        tracer($previewRoot, astNode);
        //}
    }

    function clearCurrentTrace() {
        var trace = currentTrace;
        $(trace.styled).svgRemoveClass(selectedClassName);
        $(trace.created).remove();
        trace.styled = [];
        trace.created = [];
    }

    function traceElement($previewRoot, tag) {
        var $element = linker.findByAstNode($previewRoot, tag);
        if ($element.length === 0)
            return;

        $element.svgAddClass(selectedClassName);
        currentTrace.styled.push($element[0]);
    }

    function tracePathSegment($previewRoot, segment) {
        var $path = linker.findByAstNode($previewRoot, segment.parent);
        if ($path.length === 0)
            return;

        var start = segment.startPoint();
        var d = 'M ' + start.x + ' ' + start.y + ' ' + segment.toAbsolute().stringify();
        var $tracePath = $path.clone()
             .svgAddClass(selectedClassName)
             .attr('d', d)
             .appendTo($path.parent());

        currentTrace.created.push($tracePath[0]);
    }
};});