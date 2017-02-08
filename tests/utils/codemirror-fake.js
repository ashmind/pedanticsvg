/* globals define:false */
define(['jquery'], $ => {
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

    const optionCallbacks = {};
    const extensions = {};

    const CodeMirrorFake = () => {
        const handlers = {};
        const options = {};

        const cm = {};
        cm.on = (name, handler) => {
            let handlerList = handlers[name];
            if (!handlerList) {
                handlerList = [];
                handlers[name] = handlerList;
            }

            handlerList.push(handler);
        };

        cm.setOption = (name, value) => {
            optionCallbacks[name](cm, value);
            options[name] = value;
        };

        cm.getOption = name => options[name];
        cm.markText = () => ({ clear: () => {} });

        $.extend(cm, extensions);
        return cm;
    };

    $.extend(CodeMirrorFake, {
        defineOption:    (name, _, callback) => { optionCallbacks[name] = callback; },
        defineExtension: (name, extension) => { extensions[name] = extension; },
        signal: () => {}
    });

    return CodeMirrorFake;
});