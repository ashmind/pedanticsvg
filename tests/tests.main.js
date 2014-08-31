(function() {
    'use strict';
    var config = {
        paths: {
            app:                    '../js',
            sax:                    '../external/sax',
            codemirror:             'utils/codemirror-fake',
            jquery:                 'external/jquery-2.0.3',
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
        'track-nodes.tests.js'
    ];


    require(['jasmine/boot'], function () {
        var jasmineDescribe = window.describe;
        window.describe = function(name, deps, tests) {
            if (!(deps instanceof Array)) {
                tests = deps;
                deps = [];
            }

            define([name].concat(deps), function() {
                var required = arguments;
                jasmineDescribe(name, function() {
                    tests.apply(undefined, required);
                });
            });
        };

        require(tests, function () {
            window.onload();
        });
    });
})();