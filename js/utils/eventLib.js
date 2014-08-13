define(function() {
    'use strict';

    return function() {
        var subscribers = [];
        var event = (function(arg) {
            if (typeof arg === 'function') {
                subscribers.push(arg);
                return;
            }

            for (var i = 0; i < subscribers.length; i++) {
                subscribers[i].apply(undefined, arguments);
            }
        });

        return event;
    };
});