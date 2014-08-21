(function() {
    'use strict';
    var config = {
        paths: {
            app:                    '../js',
            sax:                    '../external/sax',
            jquery:                 'https://code.jquery.com/jquery-2.0.3.min',
            jasmine:                'external/jasmine/jasmine',
            'jasmine/jasmine-html': 'external/jasmine/jasmine-html',
            'jasmine/boot':         'external/jasmine/boot'
        },
        shim: {
            sax: { exports: 'sax' },
            'jasmine': { exports: 'jasmineRequire' },
            'jasmine/jasmine-html': {
                deps: ['jasmine'],
                exports: 'jasmineRequire'
            },
            'jasmine/boot': {
                deps: ['jasmine', 'jasmine/jasmine-html'],
                exports: 'jasmineRequire'
            },
        }
    };
    require.config(config);

    var tests = [
        'svg-parser.tests.js',
        'parse-path.tests.js',
    ];


    require(['jasmine/boot'], function () {
        var jasmineDescribe = window.describe;
        window.describe = function(name, tests) {
            define([name], function(instance) {
                jasmineDescribe(name, function() {
                    tests(instance);
                });
            });
        };

        require(tests, function () {
            window.onload();
        });
    });
})();