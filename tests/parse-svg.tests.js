import parse from '../js/parsing/parse-svg.js';

describe('parsing/parse-svg', () => {
    it('can parse a simple SVG', () => {
        const original = '<svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 10 10"><metadata>dog</metadata><g><path d="M2 2 l3 3z"/></g></svg>';
        const ast = parse(original).root;

        expect(toTestSVG(ast)).toEqual(original);
    });

    it('can parse namespaces', () => {
        const original = '<svg:svg xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><svg:a xlink:href="#nowhere"><svg:text>/svg/index.html</svg:text></svg:a></svg:svg>';
        const ast = parse(original).root;

        expect(toTestSVG(ast)).toEqual(original);
    });

    it('finds nodes by range correctly (simple 1)', () => {
        testFindsNodesByRange(
            '<svg><g></g></svg>',
            [{ start: at(0, 0), end: at(0, 0) }],
            [ 'svg' ]
        );
    });

    it('finds nodes by range correctly (simple 2)', () => {
        testFindsNodesByRange(
            '<svg><g></g></svg>',
            [{ start: at(0, 5), end: at(0, 5) }],
            [ 'g' ]
        );
    });

    it('finds nodes by range correctly (simple 3)', () => {
        testFindsNodesByRange(
            '<svg><g></g><g><path /></g></svg>',
            [
                { start: at(0, 5),  end: at(0, 11) },
                { start: at(0, 13), end: at(0, 15) }
            ],
            [ 'g', 'g', 'path' ]
        );
    });

    it('finds nodes by range correctly (path segments)', () => {
        testFindsNodesByRange(
            '<path d="M570 664 c-19 -49 27 -87 69 -57 23 16 28 52 9 71 -7 7 -25 12 -40 12 -21 0 -31 -6 -38 -26z"/>',
            [{ start: at(0, 13), end: at(0, 13) }],
            [ 'M570 664' ]
        );
    });

    it('finds nodes by range correctly (multiline+namespace)', () => {
        testFindsNodesByRange(
            ['<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">',
             '  <path d="M 10 90 A 70 70 0 0 1 90 10"',
             '        stroke="blue" fill="none" stroke-width="2" />',
             '  <path d="M 10 90 A 70 70 0 0 1 90 10"',
             '        stroke="blue" fill="none" stroke-width="2" />',
             '</svg>'].join('\r\n'),
            [{ start: at(3, 23), end: at(3, 23) }],
            ['A 70 70 0 0 1 90 10']
        );
    });

    it('returns empty list when finding by range if the code is broken', () => {
        testFindsNodesByRange(
            '<svg><rect </svg>',
            [{ start: at(0, 6),  end: at(0, 7) }],
            []
        );
    });

    function toTestSVG(astNode) {
        if (typeof(astNode) === 'string')
            return astNode;

        if (astNode.type === 'root') {
            let result = '';
            for (const child of astNode.children) {
                result += toTestSVG(child);
            }
            return result;
        }

        if (astNode.type === 'tag') {
            let result = `<${astNode.name}`;
            const attributes = astNode.attributes;
            for (const i of attributes) {
                result += ` ${i.name}="${i.value}"`;
            }

            if (astNode.children.length > 0) {
                result += '>';
                for (const i of astNode.children) {
                    result += toTestSVG(i);
                }
                result += `</${astNode.name}>`;
            }
            else {
                result += '/>';
            }
            return result;
        }

        throw new Error(`Unknown AST node: ${astNode.type}`);
    }

    function testFindsNodesByRange(code, ranges, expected) {
        const ast = parse(code);
        const nodes = ast.getNodesInRanges(ranges);

        expect(nodes.map(n => n.name || n.toSVG())).toEqual(expected);
    }

    function at(line, column) {
        return { line, column };
    }
});