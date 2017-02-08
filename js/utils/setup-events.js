export default function(object, names) {
    const allHandlers = {};

    const subscribe = [];
    allHandlers.subscribe = subscribe;
    for (const name of names) {
        allHandlers[name] = [];
    }

    object.on = function(name, handler) {
        const handlers = allHandlers[name];
        if (!handlers)
            throw NoEvent(name);

        handlers.push(handler);
        callAll(subscribe, { name, handler });
    };

    object.off = function(name, handler) {
        const handlers = allHandlers[name];
        if (!handlers)
            throw NoEvent(name);

        for (let i = 0; i < handlers.length; i++) {
            if (handlers[i] === handler) {
                handlers.splice(i, 1);
                i -= 1;
            }
        }
    };

    object.trigger = function(name, event) {
        const handlers = allHandlers[name];
        if (!handlers)
            throw NoEvent(name);

        callAll(handlers, event);
    };

    return object;
}

function callAll(handlers, event) {
    for (const handler of handlers) {
        handler(event);
    }
}

function NoEvent(name) {
    return new Error(`Event '${name}' is not registered.`);
}