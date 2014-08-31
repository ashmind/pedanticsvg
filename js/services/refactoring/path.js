define(function() {
    'use strict';
    var refactorings = [
        pathToRelativeOrAbsolute('relative'),
        pathToRelativeOrAbsolute('absolute'),
        segmentToRelativeOrAbsolute('absolute'),
        segmentToRelativeOrAbsolute('relative')
    ];

    return refactorings;

    function pathToRelativeOrAbsolute(type) {
        var convert = (type === 'absolute') ? 'toAbsolute' : 'toRelative';
        var convertibleIsAbsolute = (type === 'relative');

        return {
            display: 'Convert <path> to ' + type,
            multiple: false,
            refactor: function(path) {
                return refactorSegmentsToRelativeOrAbsolute(path.segments, convert);
            },

            relevant: function(astNode) {
                if (astNode.name !== 'path' || astNode.segments.length === 0)
                    return false;

                for (var i = 1; i < astNode.segments.length; i++) {
                    if (astNode.segments[i].isAbsolute === convertibleIsAbsolute)
                        return true;
                }

                return false;
            }
        };
    }

    function segmentToRelativeOrAbsolute(type) {
        var convert = (type === 'absolute') ? 'toAbsolute' : 'toRelative';
        var convertibleIsAbsolute = (type === 'relative');

        return {
            display: 'Convert to ' + type,
            multiple: true,
            refactor: function(segments) {
                return refactorSegmentsToRelativeOrAbsolute(segments, convert);
            },

            relevant: function(astNode) {
                return astNode.type === 'path-segment'
                    && astNode.isAbsolute === convertibleIsAbsolute
                    && !isFirstMove(astNode);
            }
        };
    }

    function refactorSegmentsToRelativeOrAbsolute(segments, convert) {
        var first = segments[0];

        var svg = (isFirstMove(first) ? first : first[convert]()).toSVG();
        for (var i = 1; i < segments.length; i++) {
            svg += ' ' + segments[i][convert]().toSVG();
        }
        var last = segments[segments.length - 1];
        var end = last.end;

        // need to check that following segment isn't dependent
        // on current segment's command
        var afterLast = last.parent.segments[last.index + 1];
        if (afterLast && afterLast.implicitCommand) {
            svg += ' ' + afterLast.toSVG(); // this always adds command at the moment
            end = afterLast.end;
        }

        return {
            start: first.start,
            end:   end,
            text:  svg
        };
    }

    function isFirstMove(astNode) {
        return astNode.index === 0 && astNode.command === 'M';
    }
});