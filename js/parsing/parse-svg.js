import sax from 'sax-customized';
import ast from './svg-ast.js';
import parsePath from './parse-path.js';

    var parser = sax.parser(true, {
        position: true,
        xmlns: true
    });

    function parse(code) {
        var root = ast.root();
        var flat = [];
        var stack = [root];
        var errors = [];

        var tagExtra = [];
        var onpath = function(a) {
            var valueStart = getPosition(a, 'valueStart');
            tagExtra.push(function(tag) {
                var parsed = parsePath(a.value, { position: valueStart, parent: tag });
                errors.push.apply(errors, parsed.errors);
                var segments = parsed.segments;
                tag.segments = segments;
                flat.push.apply(flat, segments);
            });
        };
        parser.onattribute = function(a) {
            if (a.name === 'd')
                onpath(a);
        };

        parser.onopentag = function(node) {
            var parent = topOf(stack);

            var attributes = [];
            for (var name in node.attributes) {
                var attribute = node.attributes[name];
                attributes.push({
                    name: name,
                    value: attribute.value,
                    end: getPosition(attribute, 'end')
                });
            }

            var tag = ast.tag(node.name, attributes);
            tag.parent = parent;
            tag.start = getPosition(parser, 'startTag');
            tag.nameEnd = getPosition(node, 'nameEnd');
            tag.index = parent.children.length;

            parent.children.push(tag);
            flat.push(tag);
            stack.push(tag);

            for (var i = 0; i < tagExtra.length; i++) {
                tagExtra[i](tag);
            }
            tagExtra = [];
        };

        parser.onclosetag = function() {
            topOf(stack).end = getPosition(parser);
            stack.pop();
        };

        var pushChild = function(child) {
            var parent = topOf(stack);
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

        var rangeIndex = 0;
        var range = ranges[rangeIndex];
        var inRange = false;

        var nodes = [];
        var firstInRangeCandidate;
        for (var i = 0; i < flat.length; i++) {
            var node = flat[i];

            if (!inRange) {
                var startToStart = compare(node.start, range.start);
                if (startToStart === 'before') {
                    var endToStart = compare(node.end, range.start);
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

            var startToEnd = compare(node.start, range.end);
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