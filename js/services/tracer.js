define(['app/services/linker'], function(linker) { 'use strict'; return function(editor, preview) {
    var selectedClassName = 'psvg-selected';

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
                '.psvg-selected { fill: #daa520 !important; }'
            ]
        });
    }

    editor.selectionchange(function(selection) {
        preview.getRootElement().then(function ($previewRoot) {
            highlightPreview($previewRoot, selection.astNodes);
        });
    });

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

    function highlightPreview($previewRoot, astNodes) {
        $previewRoot.find('.' + selectedClassName)
                    .each(function() {
                        this.classList.remove(selectedClassName);
                    });

        for (var i = 0; i < astNodes.length; i++) {
            var $element = linker.findByAstNode($previewRoot, astNodes[i]);
            $element[0].classList.add(selectedClassName);
        }
    }
};});