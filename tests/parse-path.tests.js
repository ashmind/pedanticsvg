import parse from '../js/parsing/parse-path.js';

describe('parsing/parse-path', () => {
    [{
        path:     'M 100 100 L 300 100 L 200 300 z',
        segments: [ 'M 100 100', 'L 300 100', 'L 200 300', 'z' ]
    }, {
        path:     'M100-200L0.6.5H.3V-.1',
        segments: [ 'M100-200', 'L0.6 0.5', 'H0.3', 'V-0.1' ]
    }, {
        path:     'M570 664 c-19-49 27-87 69-57 23 16 28 52 9 71-7 7-25 12-40 12-21 0-31 -6 -38 -26z',
        segments: [ 'M570 664', 'c-19-49 27-87 69-57', 'c 23 16 28 52 9 71', 'c-7 7-25 12-40 12', 'c-21 0-31 -6 -38 -26', 'z' ]
    },{
        path:     'M10,10 L30,40z',
        segments: [ 'M10,10', 'L30,40', 'z' ]
    },{
        path:     'M300,200 h-150 a150,150 0 1,0 150,-150 z',
        segments: [ 'M300,200', 'h-150', 'a150,150 0 1,0 150,-150', 'z' ]
    }].forEach((test, index) => {
        it(`can parse path ${index + 1}`, () => {
            const result = parse(test.path);
            const segmentValues = result.segments.map(s => s.toSVG());

            expect(segmentValues).toEqual(test.segments);
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
    }].forEach((pair, index) => {
        it(`produces correct positions ${index + 1}`, () => {
            const result = parse(pair.path);
            const positions = result.segments.map(s => ({ start: s.start, end: s.end }));

            expect(positions).toEqual(pair.positions);
        });
    });

    [{
        path:     'M100 100 c10 10 20 20 40-40 h5 v5 l10 10',
        expected: {
            index: 4,
            value: 'L155 75'
        }
    }, {
        path:     'M300,200 h-150 a150,150 0 1,0 150,-150 z',
        expected: {
            index: 2,
            value: 'A150,150 0 1,0 300,50'
    }, {
        path:     'M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0',
        expected: {
            index: 2,
            value: 'C25.469 5.909 22.924 5.169 20.201 5.169'
        }
    }].forEach((data, index) => {
        const path = data.path;
        const expected = data.expected;

        it(`produces path that can be converted to absolute ${index + 1}`, () => {
            const result = parse(path);
            const absolute = result.segments[expected.index].toAbsolute();

            expect(absolute.toSVG()).toEqual(expected.value);
        });
    });

    [{
        path:     'M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z',
        expected: {
            index: 4,
            value: 'c-0.001,-8.254,-6.692,-14.946,-14.946,-14.946'
        }
    }, {
        path:     'M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z',
        expected: {
            index: 6,
            value: 'c2.119,0,4.1,0.576,5.812,1.566'
        }
    }].forEach((data, index) => {
        const path = data.path;
        const expected = data.expected;

        it(`produces path that can be converted to relative ${index + 1}`, () => {
            const result = parse(path);
            const relative = result.segments[expected.index].toRelative();

            expect(relative.toSVG()).toEqual(expected.value);
        });
    });

    it('reports parsing errors', () => {
        const result = parse('M100 100 e! H10');

        expect(result.errors).toEqual([{
            message: 'Unexpected: \'e!\'.',
            line: 0,
            column: 9
        }]);
    });

    function at(line, column) {
        return { line, column };
    }
});