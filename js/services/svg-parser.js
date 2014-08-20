define(['sax'], function(sax) {
    'use strict';

    var parser = sax.parser(true, {
        lowercase: true,
        position: true
    });

    function parse(code) {
        var root = { type: 'root', children: [] };
        var flat = [];
        var stack = [root];

        parser.onprocessinginstruction = function(node) {
            topOf(stack).children.push({
                type: 'instruction',
                raw: '<?' + node.name + ' ' + node.body + '?>'
            });
        };

        parser.ondoctype = function(content) {
            topOf(stack).children.push({
                type: 'doctype',
                raw: '<!DOCTYPE ' + content + '>'
            });
        };

        parser.oncomment = function(text) {
            topOf(stack).children.push({
                type: 'comment',
                text: text
            });
        };

        var attributes = {};
        parser.onattribute = function(a) {
            attributes[a.name] = {
                type: 'attribute',
                name: a.name,
                value: a.value,
                valueStart: getPosition(parser, 'attribValueStart'),
                valueEnd: getPosition(parser)
            };
        };

        parser.onopentag = function(node) {
            var parent = topOf(stack);
            var tag = {
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

            attributes = {};
        };

        parser.ontext = function(text) {
            topOf(stack).children.push(text);
        };

        parser.onclosetag = function() {
            topOf(stack).end = getPosition(parser);
            stack.pop();
        };

        var errors = [];
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
            getNodeAt: function(position) { return getNodeAt(flat, position); },
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

    function getNodeAt(flat, position) {
        var line = position.line;
        var column = position.column;

        var match;
        for (var i = 0; i < flat.length; i++) {
            var start = flat[i].start;
            var end = flat[i].end;
            if (start.line < line) {
                if (end.line < line)
                    continue;

                if (end.line === line && end.column < column)
                    continue;

                match = flat[i];
                continue;
            }

            if (start.line === line && start.column <= column) {
                if (end.line === line && end.column < column)
                    continue;

                match = flat[i];
                continue;
            }

            // start > position
            break;
        }

        return match;
    }

    function stringify(node) {
        if (typeof node === 'string')
            return node;

        if (node.raw)
            return node.raw;

        if (node.type === 'root')
            return stringifyList(node.children);

        if (node.type === 'tag') {
            var result = '<' + node.name;
            if (Object.getOwnPropertyNames(node.attributes),length > 0)
                result += ' ';

            result += stringifyList(node.attributes, ' ');
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

        if (node.type === 'attribute')
            return node.name + '="' + node.value + '"';

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