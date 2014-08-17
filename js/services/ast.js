define(['sax'], function(sax) { 'use strict'; return function() {
    var root;
    var flat;
    var lastEnd = { line: 0, column: 0 };

    var stack = [];
    var parser = sax.parser({
        lowercase: true,
        position: true
    });

    parser.onopentag = function(node) {
        var parent = stack[stack.length - 1];
        var tag = {
            name: node.name,
            parent: parent,
            children: [],
            start: lastEnd
        };
        parent.children.push(tag);
        flat.push(tag);
        stack.push(tag);

        lastEnd = { line: parser.line, column: parser.column };
    };

    parser.onclosetag = function() {
        var position = { line: parser.line, column: parser.column };
        lastEnd = position;
        stack[stack.length - 1].end = position;
        stack.pop();
    };

    function parse(code) {
        root = { children: [] };
        flat = [];
        stack.push(root);
        parser.write(code).close();
        console.log(root);
    }

    function getNodeAt(position) {
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

    return {
        parse: parse,
        getNodeAt: getNodeAt
    };
};});