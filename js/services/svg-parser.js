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

        parser.onopentag = function(node) {
            var parent = topOf(stack);
            var tag = {
                type: 'tag',
                name: node.name,
                parent: parent,
                attributes: node.attributes,
                children: [],
                start: getStartTagPosition(parser)
            };
            parent.children.push(tag);
            flat.push(tag);
            stack.push(tag);
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

    function getPosition(parser) {
        return { line: parser.line, column: parser.column };
    }

    function getStartTagPosition(parser) {
        // require modified sax (not currently submitted to sax-js)
        return { line: parser.startTagLine, column: parser.startTagColumn };
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

        if (node.type === 'root')
            return stringifyChildren(node);

        if (node.type === 'tag') {
            var result = '<' + node.name;
            var attributes = node.attributes;
            for (var key in attributes) {
                result += ' ' + key + '="' + attributes[key] + '"';
            }
            if (node.children.length > 0) {
                result += '>';
                result += stringifyChildren(node);
                result += '</' + node.name + '>';
            }
            else {
                result += '/>';
            }
            return result;
        }

        throw new Error('Unknown node: ' + JSON.stringify(node) + '.');
    }

    function stringifyChildren(node) {
        var result = '';
        var children = node.children;
        for (var i = 0; i < children.length; i++) {
            result += stringify(children[i]);
        }
        return result;
    }

    return parse;
});