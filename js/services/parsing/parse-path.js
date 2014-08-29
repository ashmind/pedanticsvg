define(['app/services/svg-ast', 'app/utils/regexp-iterator', 'app/utils/position'], function(ast, RegExpIterator, Position) {
    'use strict';

    // This all is pretty terrible and should probably be rewritten
    // using a proper parser.

    var segmentRegexp = /([mlhvcsqtaz])((?:[\s,]*[\d\.\-]+)*)|(\s+)/i;
    var coordRegexp = /\-?(?:\d*\.)?\d+|([\s,]+)/i;
    var coordKeys = {
        m: ['x', 'y'],
        l: ['x', 'y'],
        h: ['x'],
        v: ['y'],
        c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
        s: ['x2', 'y2', 'x', 'y'],
        q: ['x1', 'y1', 'x', 'y'],
        t: ['x', 'y'],
        a: ['rx', 'ry', 'x-axis-rotation', 'large-arg-flag', 'sweep-flag', 'x', 'y'], // this is an approximation, needs better numbers grammar
        z: []
    };

    return function (path, outer) {
        outer = outer || {};
        var result = {
            segments: [],
            errors: []
        };

        var parent = outer.parent || { segments: result.segments };

        parse();
        return result;

        function parse() {
            /* jshint newcap:false */
            var position = Position(
                outer.position ? outer.position.line : 0,
                outer.position ? outer.position.column : 0
            );
            var iterator = RegExpIterator(path, segmentRegexp);
            for (var item = iterator.next(); !item.done; item = iterator.next()) {
                var start = position.clone();
                position.advanceByString(item.value.string);

                var match = item.value.match;
                if (!match) {
                    reportError('Unexpected: \'' + item.value.string + '\'.', start);
                    continue;
                }

                if (match[3]) // whitespace, only matches if nothing else did
                    continue;

                var command = match[1];
                var coords = match[2];
                parseCoords(command, coords, start);
            }
        }

        function parseCoords(command, allCoordsString, position) {
            /* jshint newcap:false */
            var firstCoords = true;
            var coords = { _count: 0 };
            var keys = coordKeys[command.toLowerCase()];
            var start = position.toObject();
            if (keys === undefined) {
                reportError('Unknown command \'' + command + '\'.', start);
                return;
            }

            position.advanceByString(command);

            var iterator = RegExpIterator(allCoordsString, coordRegexp);
            for (var item = iterator.next(); !item.done; item = iterator.next()) {
                var string = item.value.string;
                position.advanceByString(string);
                if (!item.value.match) {
                    reportError('Unexpected: \'' + string + '\'.', start);
                    start = position.toObject();
                    coords = { _count: 0 };
                    continue;
                }

                if (item.value.match[1]) { // whitespace
                    if (coords._count === 0 && !firstCoords) {
                        // skip initial whitespace
                        start = position.toObject();
                    }

                    continue;
                }

                coords[keys[coords._count]] = parseFloat(string);
                coords._count += 1;
                if (coords._count < keys.length)
                    continue;

                var end = position.toObject();
                delete coords._count;
                addSegment(command, coords, start, end);
                coords = { _count: 0 };
                firstCoords = false;
                start = end;
            }

            if (keys.length === 0)
                addSegment(command, {}, start, position.toObject());

            if (coords._count > 0)
                reportError('Segment \'' + command + '\' must have exactly ' + keys.length + ' values.', start);
        }

        function addSegment(command, coords, start, end) {
            /* jshint newcap:false */

            var index = result.segments.length;
            var segment = ast.pathSegment(command, coords);
            segment.start = start;
            segment.end = end;
            segment.parent = parent;
            segment.index = index;
            result.segments.push(segment);
        }

        function reportError(message, position) {
            position = position.toObject ? position.toObject() : position;
            result.errors.push({
                message: message,
                line: position.line,
                column: position.column
            });
        }
    };
});