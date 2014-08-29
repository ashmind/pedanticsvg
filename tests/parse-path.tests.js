/* globals describe:false, it:false, expect:false */

describe('app/services/parsing/parse-path', function(parse) {
    'use strict';

    [{
        path:     'M 100 100 L 300 100 L 200 300 z',
        segments: [ 'M 100 100', 'L 300 100', 'L 200 300', 'z' ]
    }, {
        path:     'M100-200L0.6.5H.3V-.1',
        segments: [ 'M 100 -200', 'L 0.6 0.5', 'H 0.3', 'V -0.1' ]
    }, {
        path:     'M570 664 c-19-49 27-87 69-57 23 16 28 52 9 71-7 7-25 12-40 12-21 0-31 -6 -38 -26z',
        segments: [ 'M 570 664', 'c -19 -49 27 -87 69 -57', 'c 23 16 28 52 9 71', 'c -7 7 -25 12 -40 12', 'c -21 0 -31 -6 -38 -26', 'z' ]
    },{
        path:     'M10,10 L30,40z',
        segments: [ 'M 10 10', 'L 30 40', 'z' ]
    },{
        path:     'M300,200 h-150 a150,150 0 1,0 150,-150 z',
        segments: [ 'M 300 200', 'h -150', 'a 150 150 0 1 0 150 -150', 'z' ]
    }].forEach(function(pair, index) {
        it('can parse path ' + (index + 1), function() {
            var result = parse(pair.path);
            var segmentValues = result.segments.map(function(s) {
                return s.toSVG();
            });

            expect(segmentValues).toEqual(pair.segments);
        });
    });

    [{
        path:     'M 1 1 L 2 2',
        positions: [
            { start: at(0, 0), end: at(0, 5) },
            { start: at(0, 6), end: at(0, 11) }
        ]
    }, {
        path:     'M570 664 c-19-49 27-87 69-57 23 16 28 52 9 71z',
        positions: [
            { start: at(0, 0),  end: at(0, 8)  },
            { start: at(0, 9),  end: at(0, 28) },
            { start: at(0, 29), end: at(0, 45) },
            { start: at(0, 45), end: at(0, 46) }
        ]
    }].forEach(function(pair, index) {
        it('produces correct positions ' + (index + 1), function() {
            var result = parse(pair.path);
            var positions = result.segments.map(function(s) {
                return { start: s.start, end: s.end };
            });

            expect(positions).toEqual(pair.positions);
        });
    });

    [{
        path:     'M100 100 c10 10 20 20 40-40 h5 v5 l10 10',
        expected: {
            index: 4,
            value: 'L 155 75'
        }
    }, {
        path:     'M300,200 h-150 a150,150 0 1,0 150,-150 z',
        expected: {
            index: 2,
            value: 'A 150 150 0 1 0 300 50'
        }
    }].forEach(function(data, index) {
        var path = data.path;
        var expected = data.expected;

        it('produces path that can be converted to absolute ' + (index + 1), function() {
            var result = parse(path);
            var absolute = result.segments[expected.index].toAbsolute();

            expect(absolute.toSVG()).toEqual(expected.value);
        });
    });

    it('reports parsing errors', function() {
        var result = parse('M100 100 e! H10');

        expect(result.errors).toEqual([{
            message: 'Unexpected: \'e!\'.',
            line: 0,
            column: 9
        }]);
    });

    function at(line, column) {
        return { line: line, column: column };
    }
});