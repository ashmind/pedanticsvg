define(function() {
    'use strict';

    var segmentRegex = /^(?:[mlhvcsqtaz](?:\s*[\-\d\.]+)*|(\s+))/i;

    return function(path, outerPosition) {
        var index = 0;

        var line = outerPosition ? outerPosition.line : 0;
        var column = outerPosition ? outerPosition.column : 0;

        var segments = [];
        var errors = [];
        var errorStart = null;

        var advancePosition = function(lineCount, columnCount) {
            if (lineCount > 0) {
                column = columnCount;
                line += lineCount;
            }
            else {
                column += columnCount;
            }
        };

        while (index < path.length) {
            var match = segmentRegex.exec(path.substring(index));
            if (!match) {
                errorStart = index;
                index += 1;
                if (path.charAt(index) !== '\n') {
                    advancePosition(1, 0);
                }
                else {
                    advancePosition(0, 1);
                }
                continue;
            }

            var lines = match[0].split('\n');
            if (errorStart !== null) {
                var errorToken = path.substring(errorStart, index);
                errors.push({
                    message: 'Unexpected: \'' + errorToken + '\'.',
                    line: line,
                    column: column
                });
                errorStart = null;
            }

            var start = { line: line, column: column };
            advancePosition(lines.length - 1, lines[lines.length - 1].length);
            index += match[0].length;

            if (match[1]) // match[1] = whitespace between segments
                continue;

            segments.push({
                type: 'path-segment',
                value: match[0].trim(),
                start: start,
                end: { line: line, column: column }
            });
        }

        return {
            segments: segments,
            errors: errors
        };
    };
});