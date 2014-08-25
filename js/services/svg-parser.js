define(['sax', 'app/services/parsing/parse-path'], function(sax, parsePath) {
    'use strict';

    var parser = sax.parser(true, {
        position: true
    });

    function parse(code) {
        var id = 1;
        var root = { type: 'root', children: [] };
        var flat = [];
        var stack = [root];
        var errors = [];

        parser.onprocessinginstruction = function(node) {
            topOf(stack).children.push({
                id: id++,
                type: 'instruction',
                raw: '<?' + node.name + ' ' + node.body + '?>'
            });
        };

        parser.ondoctype = function(content) {
            topOf(stack).children.push({
                id: id++,
                type: 'doctype',
                raw: '<!DOCTYPE ' + content + '>'
            });
        };

        parser.oncomment = function(text) {
            topOf(stack).children.push({
                id: id++,
                type: 'comment',
                text: text
            });
        };

        var attributes = {};
        var tagExtra = [];
        var onpath = function(a) {
            var valueStart = getPosition(parser, 'attribValueStart');
            tagExtra.push(function(tag) {
                var parsed = parsePath(a.value, { position: valueStart, id: id, parent: tag });
                errors.push.apply(errors, parsed.errors);
                var segments = parsed.segments;
                tag.segments = segments;
                flat.push.apply(flat, segments);
            });
        };
        parser.onattribute = function(a) {
            if (a.name === 'd')
                onpath(a);

            attributes[a.name] = a.value;
        };

        parser.onopentag = function(node) {
            var parent = topOf(stack);
            var tag = {
                id: id++,
                type: 'tag',
                name: node.name,
                parent: parent,
                attributes: attributes,
                children: [],
                start: getPosition(parser, 'startTag')
            };
            parent.children.push(tag);
            flat.push(tag);
            stack.push(tag);

            for (var i = 0; i < tagExtra.length; i++) {
                tagExtra[i](tag);
            }
            tagExtra = [];
            attributes = {};
        };

        parser.ontext = function(text) {
            topOf(stack).children.push(text);
        };

        parser.onclosetag = function() {
            topOf(stack).end = getPosition(parser);
            stack.pop();
        };

        parser.onerror = function(e) {
            errors.push({
                message: e.message.match(/^.+/)[0],
                line:    parser.line,
                column:  parser.column
            });
        };

        try {
            parser.write(code);
        }
        finally {
            parser.resume().close();
        }

        return {
            root: root,
            errors: errors,
            getNodesInRanges: function(ranges) { return getNodesInRanges(flat, ranges); },
            stringify: function() { return stringify(root); }
        };
    }

    function topOf(stack) {
        return stack[stack.length - 1];
    }

    function getPosition(parser, prefix) {
        return prefix
             ? { line: parser[prefix + 'Line'], column: parser[prefix + 'Column'] }
             : { line: parser.line, column: parser.column };
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

    function stringify(node) {
        if (typeof node === 'string')
            return node;

        if (node.raw)
            return node.raw;

        if (node.stringify)
            return node.stringify();

        if (node.type === 'root')
            return stringifyList(node.children);

        if (node.type === 'tag') {
            var result = '<' + node.name;

            var attributes = node.attributes;
            for (var name in attributes) {
                result += ' ' + name + '="' + attributes[name] + '"';
            }

            if (node.children.length > 0) {
                result += '>';
                result += stringifyList(node.children);
                result += '</' + node.name + '>';
            }
            else {
                result += '/>';
            }
            return result;
        }

        if (node.type === 'comment')
            return '<!-- ' + node.text + ' -->';

        throw new Error('Unknown node: ' + JSON.stringify(node) + '.');
    }

    function stringifyList(nodes, separator) {
        var results = [];
        if (nodes instanceof Array) {
            for (var i = 0; i < nodes.length; i++) {
                results.push(stringify(nodes[i]));
            }
        }
        else {
            for (var key in nodes) {
                results.push(stringify(nodes[key]));
            }
        }
        return results.join(separator || '');
    }

    return parse;
});