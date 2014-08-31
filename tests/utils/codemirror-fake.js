define(['jquery'], function($) {
    'use strict';

    /*var stub = function() {};
    var textarea = {
        getAttribute: stub,
        parentNode: {
            insertBefore: stub
        },
        style: stub,
        value: ''
    };*/

    var optionCallbacks = {};
    var extensions = {};

    var CodeMirrorFake = function() {
        var handlers = {};
        var options = {};

        var cm = {};
        cm.on = function(name, handler) {
            var handlerList = handlers[name];
            if (!handlerList) {
                handlerList = [];
                handlers[name] = handlerList;
            }

            handlerList.push(handler);
        };

        cm.setOption = function(name, value) {
            optionCallbacks[name](this, value);
            options[name] = value;
        };

        cm.getOption = function(name) {
            return options[name];
        };

        cm.markText = function() {
            return { clear: function() {} };
        };

        $.extend(cm, extensions);
        return cm;
    };

    $.extend(CodeMirrorFake, {
        defineOption: function(name, _, callback) {
            optionCallbacks[name] = callback;
        },

        defineExtension: function(name, extension) {
            extensions[name] = extension;
        },

        signal: function () {}
    });

    return CodeMirrorFake;
});