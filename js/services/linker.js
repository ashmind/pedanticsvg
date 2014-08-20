define(function() {
    'use strict';
    var idName = 'data-psvg-d39c9e8b-448e-45fc-a972-710c179c3650-id'; // just a random guid to guarantee uniqueness
    var uniqueId = 0;

    function annotate(astNode) {
        if (astNode.type !== 'tag' && astNode.type !== 'root')
            return;

        if (astNode.type === 'tag') {
            astNode.attributes[idName] = {
                type: 'attribute',
                name: idName,
                value: uniqueId++
            };
        }

        var children = astNode.children;
        for (var i = 0; i < children.length; i++) {
            annotate(children[i]);
        }
    }

    function findByAstNode($root, astNode) {
        var id = astNode.attributes[idName];
        var $element = $root.find('[' + idName + '=' + id.value + ']');
        return $element;
    }

    return {
        annotate: annotate,
        findByAstNode: findByAstNode
    };
});