import sax from 'sax-customized';
import ast from './svg-ast.js';
import parsePath from './parse-path.js';

function parse(code) {
    const parser = sax.parser(true, {
        position: true,
        xmlns: true
    });

    const root = ast.root();
    const flat = [];
    const stack = [root];
    const errors = [];

    let tagExtra = [];
    const onpath = attribute => {
        const valueStart = getPosition(attribute, 'valueStart');
        tagExtra.push(tag => {
            const parsed = parsePath(attribute.value, { position: valueStart, parent: tag });
            errors.push(...parsed.errors);
            const segments = parsed.segments;
            tag.segments = segments;
            flat.push(...segments);
        });
    };
    parser.onattribute = function(a) {
        if (a.name === 'd')
            onpath(a);
    };

    parser.onopentag = function(node) {
        const parent = topOf(stack);

        const attributes = [];
        for (const name in node.attributes) {
            const attribute = node.attributes[name];
            attributes.push({
                name,
                value: attribute.value,
                end: getPosition(attribute, 'end')
            });
        }

        const tag = ast.tag(node.name, attributes);
        tag.parent = parent;
        tag.start = getPosition(parser, 'startTag');
        tag.nameEnd = getPosition(node, 'nameEnd');
        tag.index = parent.children.length;

        parent.children.push(tag);
        flat.push(tag);
        stack.push(tag);

        for (const item of tagExtra) {
            item(tag);
        }
        tagExtra = [];
    };

    parser.onclosetag = () => {
        topOf(stack).end = getPosition(parser);
        stack.pop();
    };

    const pushChild = child => {
        const parent = topOf(stack);
        if (typeof child !== 'string')
            child.index = parent.children.length;
        parent.children.push(child);
    };
    parser.ontext                  = text    => pushChild(text);
    parser.oncomment               = text    => pushChild(ast.other('comment', `<!-- ${text} -->`));
    parser.onprocessinginstruction = node    => pushChild(ast.other('instruction', `<?${node.name} ${node.body}?>`));
    parser.ondoctype               = content => pushChild(ast.other('doctype', `<!DOCTYPE ${content}>`));

    parser.onerror = e => {
        errors.push({
            message: e.message.match(/^.+/)[0],
            line:    parser.line,
            column:  parser.column
        });
    };

    process(parser, code);

    return {
        root, errors,
        getNodesInRanges: ranges => {
            if (errors.length > 0)
                return [];
            return getNodesInRanges(flat, ranges);
        }
    };
}

// try/finally needs to be in a separate function
// to be optimized in V8
function process(parser, code) {
    try {
        parser.write(code);
    }
    finally {
        parser.resume().close();
    }
}

function topOf(stack) {
    return stack[stack.length - 1];
}

function getPosition(saxCursor, prefix) {
    return prefix
         ? { line: saxCursor[`${prefix}Line`], column: saxCursor[`${prefix}Column`], offset: saxCursor[`${prefix}Position`] }
         : { line: saxCursor.line, column: saxCursor.column, offset: saxCursor.position };
}

function getNodesInRanges(flat, ranges) {
    if (ranges.length === 0)
        return [];

    let rangeIndex = 0;
    let range = ranges[rangeIndex];
    let inRange = false;

    const nodes = [];
    let firstInRangeCandidate;
    for (let i = 0; i < flat.length; i++) {
        const node = flat[i];
        if (!inRange) {
            const startToStart = compare(node.start, range.start);
            if (startToStart === 'before') {
                const endToStart = compare(node.end, range.start);
                if (endToStart === 'before')
                    continue;

                firstInRangeCandidate = node;
                continue;
            }

            // node.start >= range.start
            if (startToStart !== 'equal' && firstInRangeCandidate)
                nodes.push(firstInRangeCandidate);

            firstInRangeCandidate = null;
        }

        const startToEnd = compare(node.start, range.end);
        if (startToEnd !== 'after') {
            // node.start <= range.end
            nodes.push(node);
            inRange = true;
        }
        else {
            inRange = false;
            rangeIndex += 1;
            if (rangeIndex === ranges.length)
                break;

            range = ranges[rangeIndex];
            i -= 1; // retry with the new range
        }
    }

    if (firstInRangeCandidate)
        nodes.push(firstInRangeCandidate);

    return nodes;
}

function compare(position1, position2) {
    if (position1.line < position2.line)
        return 'before';

    if (position1.line === position2.line) {
        if (position1.column < position2.column)
            return 'before';

        if (position1.column === position2.column)
            return 'equal';
    }

    return 'after';
}

export default parse;