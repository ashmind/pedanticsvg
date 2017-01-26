import sax from 'sax-customized';
import ast from './svg-ast.js';
import parsePath from './parse-path.js';

    const parser = sax.parser(true, {
        position: true,
        xmlns: true
    });

    function parse(code) {
        const root = ast.root();
        let flat = [];
        let stack = [root];
        let errors = [];

        let tagExtra = [];
        const onpath = function(a) {
            const valueStart = getPosition(a, 'valueStart');
            tagExtra.push(function(tag) {
                const parsed = parsePath(a.value, { position: valueStart, parent: tag });
                errors.push.apply(errors, parsed.errors);
                const segments = parsed.segments;
                tag.segments = segments;
                flat.push.apply(flat, segments);
            });
        };
        parser.onattribute = function(a) {
            if (a.name === 'd')
                onpath(a);
        };

        parser.onopentag = function(node) {
            const parent = topOf(stack);

            let attributes = [];
            for (let name in node.attributes) {
                const attribute = node.attributes[name];
                attributes.push({
                    name: name,
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

        parser.onclosetag = function() {
            topOf(stack).end = getPosition(parser);
            stack.pop();
        };

        const pushChild = function(child) {
            const parent = topOf(stack);
            if (typeof child !== 'string')
                child.index = parent.children.length;
            parent.children.push(child);
        };
        parser.ontext = function(text) {
            pushChild(text);
        };

        parser.oncomment = function(text) {
            pushChild(ast.other('comment', '<!-- ' + text + ' -->'));
        };

        parser.onprocessinginstruction = function(node) {
            pushChild(ast.other('instruction', '<?' + node.name + ' ' + node.body + '?>'));
        };

        parser.ondoctype = function(content) {
            pushChild(ast.other('doctype', '<!DOCTYPE ' + content + '>'));
        };

        parser.onerror = function(e) {
            errors.push({
                message: e.message.match(/^.+/)[0],
                line:    parser.line,
                column:  parser.column
            });
        };

        process(parser, code);

        return {
            root: root,
            errors: errors,
            getNodesInRanges: function(ranges) {
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

    function getPosition(sax, prefix) {
        return prefix
             ? { line: sax[prefix + 'Line'], column: sax[prefix + 'Column'], offset: sax[prefix + 'Position'] }
             : { line: sax.line, column: sax.column, offset: sax.position };
    }

    function getNodesInRanges(flat, ranges) {
        if (ranges.length === 0)
            return [];

        let rangeIndex = 0;
        let range = ranges[rangeIndex];
        let inRange = false;

        let nodes = [];
        let firstInRangeCandidate;
        for (const node of flat) {
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