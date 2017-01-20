var refactorings = [
    pathToRelativeOrAbsolute('relative'),
    pathToRelativeOrAbsolute('absolute'),
    segmentToRelativeOrAbsolute('absolute'),
    segmentToRelativeOrAbsolute('relative')
];



function pathToRelativeOrAbsolute(type) {
    var convert = (type === 'absolute') ? 'toAbsolute' : 'toRelative';
    var convertibleIsAbsolute = (type === 'relative');

    return {
        display: 'Convert <path> to ' + type,
        refactor: function(paths) {
            var changes = [];
            for (var i = 0; i < paths.length; i++) {
                changes.push.apply(changes, refactorSegmentsToRelativeOrAbsolute(paths[i].segments, convert));
            }
            return changes;
        },

        relevant: function(astNode) {
            if (astNode.name !== 'path' || !astNode.segments || astNode.segments.length === 0)
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
    var firstSVG = (isFirstMove(first) ? first : first[convert]()).toSVG();
    var changes = [rewrite(first, firstSVG)];

    for (var i = 1; i < segments.length; i++) {
        var segment = segments[i];
        changes.push(rewrite(segment, segment[convert]().toSVG()));
    }

    var last = segments[segments.length - 1];

    // need to check that following segment isn't dependent
    // on current segment's command
    var afterLast = last.parent.segments[last.index + 1];
    if (afterLast && afterLast.implicitCommand) {
        changes.push(rewrite(afterLast, afterLast.toSVG() /* this always adds command at the moment */));
    }

    return changes;
}

function rewrite(astNode, newSVG) {
    return {
        start: astNode.start,
        end:   astNode.end,
        text:  newSVG
    };
}

function isFirstMove(astNode) {
    return astNode.index === 0 && astNode.command === 'M';
}

export default refactorings;