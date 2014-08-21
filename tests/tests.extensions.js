/* globals expect:false */

define(['jasmine'], function(jasmine) {
    'use strict';

    function deepCompare(actual, expected) {
        var actualJson = JSON.stringify(actual);
        var expectedJson = JSON.stringify(expected);

        expect(actualJson).toBe(expectedJson);
    }

    jasmine.addMatchers({
        toBeDeepEqualTo: function() {
            return { compare: deepCompare };
        }
    });
});