/* globals describe:false, it:false, expect:false */

describe('app/services/svg-parser', function(parse) {
    'use strict';

    it('can roundtrip a simple svg (parse+toSVG)', function() {
        var original = '<svg width="10px" height="10px" viewBox="0 0 10 10"><metadata>dog</metadata><g><path d="M2 2 l3 3z"/></g></svg>';
        var ast = parse(original);
        var rendered = ast.root.toSVG();

        expect(rendered).toBe(original);
    });

    [
        {
            code: '<svg><g></g></svg>',
            ranges: [{ start: at(0, 0), end: at(0, 0) }],
            expected: [ 'svg' ]
        }, {
            code: '<svg><g></g></svg>',
            ranges: [{ start: at(0, 5), end: at(0, 5) }],
            expected: [ 'g' ]
        }, {
            code: '<svg><g></g><g><path /></g></svg>',
            ranges: [
                { start: at(0, 5), end: at(0, 11) },
                { start: at(0, 13), end: at(0, 15) }
            ],
            expected: [ 'g', 'g', 'path' ]
        }, {
            code: '<path d="M570 664 c-19 -49 27 -87 69 -57 23 16 28 52 9 71 -7 7 -25 12 -40 12 -21 0 -31 -6 -38 -26z"/>',
            ranges: [{ start: at(0, 13), end: at(0, 13) }],
            expected: [ 'M 570 664' ]
        }, {
            code: ['<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">',
                   '  <path d="M 10 90 A 70 70 0 0 1 90 10"',
                   '        stroke="blue" fill="none" stroke-width="2" />',
                   '  <path d="M 10 90 A 70 70 0 0 1 90 10"',
                   '        stroke="blue" fill="none" stroke-width="2" />',
                   '</svg>'].join('\r\n'),
            ranges: [{ start: at(3, 23), end: at(3, 23) }],
            expected: ['A 70 70 0 0 1 90 10']
        }
    ].forEach(function(test, index) {
        it('finds nodes by range correctly ' + (index + 1), function() {
            var ast = parse(test.code);
            var nodes = ast.getNodesInRanges(test.ranges);

            expect(nodes.map(function(n) {
                return n.name || n.toSVG();
            })).toEqual(test.expected);
        });
    });

    function at(line, column) {
        return { line: line, column: column };
    }
});