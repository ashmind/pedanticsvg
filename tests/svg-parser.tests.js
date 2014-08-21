/* globals describe:false, it:false, expect:false */

describe('app/services/svg-parser', function(parse) {
    'use strict';

    it('can roundtrip a simple svg (parse+stringify)', function() {
        var original = '<svg width="10px" height="10px" viewBox="0 0 10 10"><metadata>dog</metadata><g><path d="M2 2 l3 3z"/></g></svg>';
        var ast = parse(original);
        var rendered = ast.stringify();

        expect(rendered).toBe(original);
    });
});