/* jshint newcap:false, quotmark:false */

export default function(object, names) {
    var allHandlers = {};

    var subscribe = [];
    allHandlers.subscribe = subscribe;
    for (var i = 0; i < names.length; i++) {
        allHandlers[names[i]] = [];
    }

    object.on = function(name, handler) {
        var handlers = allHandlers[name];
        if (!handlers)
            throw NoEvent(name);

        handlers.push(handler);
        callAll(subscribe, { name: name, handler: handler });
    };

    object.off = function(name, handler) {
        var handlers = allHandlers[name];
        if (!handlers)
            throw NoEvent(name);

        for (var i = 0; i < handlers.length; i++) {
            if (handlers[i] === handler) {
                handlers.splice(i, 1);
                i -= 1;
            }
        }
    };

    object.trigger = function(name, event) {
        var handlers = allHandlers[name];
        if (!handlers)
            throw NoEvent(name);

        callAll(handlers, event);
    };

    return object;
}

function callAll(handlers, event) {
    for (var i = 0; i < handlers.length; i++) {
        handlers[i].call(undefined, event);
    }
}

function NoEvent(name) {
    return new Error("Event '" + name + "' is not registered.");
}