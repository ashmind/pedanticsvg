/* globals describe:false, it:false, expect:false */

describe('app/preview/linker', ['app/parsing/parse-svg'], function(linker, parse) {
    'use strict';

    it('produces correct annotations', function() {
        var code = '<svg><g><path d="M10 10L100 50" /></g></svg>';
        var ast = parse(code).root;
        var annotated = linker.annotate(code, ast);

        expect(annotated).toMatch(
            /<svg xmlns:psvg="[^"]+" psvg:id="\d+"><g psvg:id="\d+"><path d="M10 10L100 50" psvg:id="\d+" \/><\/g><\/svg>/
        );
    });
});