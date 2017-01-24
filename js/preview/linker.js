function annotate(code, ast) {
    const refs = { code: code, shift: 0 };
    annotateRecursive(ast, refs, true);
    return refs.code;
}

function annotateRecursive(astNode, refs, top) {
    if (astNode.type !== 'tag' && astNode.type !== 'root')
        return;

    if (astNode.type === 'tag') {
        const attributeCount = astNode.attributes.length;
        const position = attributeCount > 0
                     ? astNode.attributes[attributeCount-1].end
                     : astNode.nameEnd;

        const offset = position.offset + refs.shift;
        let newAttributes = '';
        if (top)
            newAttributes += ' xmlns:psvg="http://ashmind.github.io/pedanticsvg"';
        newAttributes += ' psvg:id="' + astNode.id + '"';

        refs.code = refs.code.substring(0, offset)
                  + newAttributes
                  + refs.code.substring(offset);
        refs.shift += newAttributes.length;
    }

    const keepTop = astNode.type === 'root';
    const children = astNode.children;
    for (let i = 0; i < children.length; i++) {
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