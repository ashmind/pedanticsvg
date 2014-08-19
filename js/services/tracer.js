define(['app/services/linker'], function(linker) { 'use strict'; return function(editor, preview) {
    var selectedClassName = 'psvg-selected';

    editor.astchange(processAst);
    function processAst(ast) {
        var root = ast.root;
        root.children[0].children.unshift({
            type: 'tag',
            name: 'style',
            attributes: {},
            children: [
                // TODO: move to CSS
                '.psvg-selected { fill: #daa520 !important; }'
            ]
        });
        linker.annotate(root);
    }

    editor.selectionchange(function(selection) {
        preview.getRootElement().then(function ($previewRoot) {
            highlightPreview($previewRoot, selection.astNodes);
        });
    });

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