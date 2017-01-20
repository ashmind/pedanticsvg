function annotate(code, ast) {
    var refs = { code: code, shift: 0 };
    annotateRecursive(ast, refs, true);
    return refs.code;
}

function annotateRecursive(astNode, refs, top) {
    if (astNode.type !== 'tag' && astNode.type !== 'root')
        return;

    if (astNode.type === 'tag') {
        var attributeCount = astNode.attributes.length;
        var position = attributeCount > 0
                     ? astNode.attributes[attributeCount-1].end
                     : astNode.nameEnd;

        var offset = position.offset + refs.shift;
        var newAttributes = '';
        if (top)
            newAttributes += ' xmlns:psvg="http://ashmind.github.io/pedanticsvg"';
        newAttributes += ' psvg:id="' + astNode.id + '"';

        refs.code = refs.code.substring(0, offset)
                  + newAttributes
                  + refs.code.substring(offset);
        refs.shift += newAttributes.length;
    }

    var keepTop = astNode.type === 'root';
    var children = astNode.children;
    for (var i = 0; i < children.length; i++) {
        annotateRecursive(children[i], refs, top && keepTop);
    }
}

function findByAstNode($root, astNode) {
    return $root.find('[psvg\\:id=' + astNode.id + ']');
}

export default {
        annotate: annotate,
        findByAstNode: findByAstNode
};