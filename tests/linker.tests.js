/* globals describe:false, it:false, expect:false */
import parse from '/js/parsing/parse-svg.js';
import linker from '/js/preview/linker.js';

describe('preview/linker', () => {
    it('produces correct annotations', () => {
        const code = '<svg><g><path d="M10 10L100 50" /></g></svg>';
        const ast = parse(code).root;
        const annotated = linker.annotate(code, ast);

        expect(annotated).toMatch(
            /<svg xmlns:psvg="[^"]+" psvg:id="\d+"><g psvg:id="\d+"><path d="M10 10L100 50" psvg:id="\d+" \/><\/g><\/svg>/
        );
    });
});