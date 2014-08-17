define(function() {
    'use strict';

    return function() {
        var subscribers = [];
        var event = (function eventFunc(arg) {
            if (typeof arg === 'function') {
                subscribers.push(arg);
                if (eventFunc.onsubscribe)
                    eventFunc.onsubscribe(arg);

                return;
            }

            for (var i = 0; i < subscribers.length; i++) {
                subscribers[i].apply(undefined, arguments);
            }
        });

        return event;
    };
});