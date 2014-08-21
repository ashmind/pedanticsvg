/* globals describe:false, it:false, expect:false */

describe('app/services/parsing/parse-path', function(parse) {
    'use strict';

    [{
        path:     'M 100 100 L 300 100 L 200 300 z',
        segments: [ 'M 100 100', 'L 300 100', 'L 200 300', 'z' ]
    }, {
        path:     'M100-200L0.6.5H.3V-.1',
        segments: [ 'M100-200', 'L0.6.5', 'H.3', 'V-.1' ]
    }].forEach(function(pair, index) {
        it('can parse path ' + (index + 1), function() {
            var result = parse(pair.path);
            var segmentValues = result.segments.map(function(s) {
                return s.value;
            });

            expect(segmentValues).toEqual(pair.segments);
        });
    });

    var at = function(line, column) {
        return { line: line, column: column };
    };
    it('produces correct positions', function() {
        var result = parse('M 1 1 L 2 2');
        var positions = result.segments.map(function(s) {
            return { start: s.start, end: s.end };
        });

        expect(positions).toEqual([
            { start: at(0, 0), end: at(0, 5) },
            { start: at(0, 6), end: at(0, 11) }
        ]);
    });
});