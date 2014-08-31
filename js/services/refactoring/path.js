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
            refactor: function(path) {
                var segments = path.segments;
                var first = segments[0];
                if (!isFirstMove(first))
                    first = first[convert]();

                var svg = segments[0].toSVG();
                for (var i = 1; i < segments.length; i++) {
                    svg += ' ' + segments[i][convert]().toSVG();
                }
                return {
                    start: segments[0].start,
                    end:   segments[segments.length - 1].end,
                    text:  svg
                };
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
            display: 'Convert this to ' + type,
            refactor: function(segment) {
                return {
                    start: segment.start,
                    end:   segment.end,
                    text:  segment[convert]().toSVG()
                };
            },

            relevant: function(astNode) {
                return astNode.type === 'path-segment'
                    && astNode.isAbsolute === convertibleIsAbsolute
                    && !isFirstMove(astNode);
            }
        };
    }

    function isFirstMove(astNode) {
        return astNode.index === 0 && astNode.command === 'M';
    }
});