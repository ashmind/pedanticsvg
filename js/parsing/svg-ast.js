let id = 1;

// TODO: Rewrite to classes 

function SvgRoot() {
    this.type = 'root';
    this.children = [];
    makeAllPropertiesReadOnly(this);
}
SvgRoot.prototype = {
    toSVG: function() {
       return arrayToSVG(this.children);
    }
};
makeAllPropertiesReadOnly(SvgRoot.prototype);

function SvgTag(name, attributes, children) {
    this.id = id++; // eslint-disable-line no-plusplus
    this.type = 'tag';
    this.name = name;
    this.attributes = attributes || [];
    this.children = children || [];
    makeAllPropertiesReadOnly(this);
}
SvgTag.prototype = {
    toSVG: function() {
        throw new Error('SvgTag.toSVG is currently not implemented.');
    }
};
makeAllPropertiesReadOnly(SvgTag.prototype);

function SvgPathSegment(command, coords, separators, _cache) {
    this.id = id++; // eslint-disable-line no-plusplus
    this.type = 'path-segment';
    this.command = command;
    this.coords = coords;
    this.separators = separators;
    this._cache = _cache || {};
    makeAllPropertiesReadOnly(this);
}
SvgPathSegment.prototype = {
    get isAbsolute() {
        return this._cache.absolute === this
            || this.command.toUpperCase() === this.command;
    },

    startPoint: function() {
        if (this._cache.startPoint)
            return this._cache.startPoint;

        const siblings = this.parent.segments;
        let firstUncachedIndex = 0;
        for (let i = this.index-1; i >= 0; i--) {
            if (siblings[i]._cache.absolute) {
                firstUncachedIndex = i+1;
                break;
            }
        }

        // this prevents stack explosion that might have happened
        // if I just called toAbsolute() on previous
        for (let i = firstUncachedIndex; i < this.index; i++) {
            siblings[i].toAbsolute();
        }

        // and one more time backwards,
        // in case there are any H or V that do not give both coords
        let x;
        let y;
        for (let i = this.index-1; i >= 0; i--) {
            const precedingCoords = siblings[i].toAbsolute().coords;
            if (x === undefined && precedingCoords.x !== undefined)
                x = precedingCoords.x;

            if (y === undefined && precedingCoords.y !== undefined)
                y = precedingCoords.y;

            if (x !== undefined && y !== undefined)
                break;
        }
        x = x || 0;
        y = y || 0;

        const startPoint = Object.freeze({ x, y });
        this._cache.startPoint = startPoint;
        return startPoint;
    },

    toRelative: function() {
        if (this._cache.relative)
            return this._cache.relative;

        if (this.command.toLowerCase() === this.command) {
            this._cache.relative = this;
            return this;
        }

        const newCoords = this._addOrSubtractFromStartPoint(-1);
        const relative = new SvgPathSegment(this.command.toLowerCase(), newCoords, this.separators, this._cache);
        this._cache.relative = relative;
        return relative;
    },

    toAbsolute: function() {
        if (this._cache.absolute)
            return this._cache.absolute;

        if (this.command.toUpperCase() === this.command) {
            this._cache.absolute = this;
            return this; // already absolute
        }

        const newCoords = this._addOrSubtractFromStartPoint(+1);
        const absolute = new SvgPathSegment(this.command.toUpperCase(), newCoords, this.separators, this._cache);
        this._cache.absolute = absolute;
        return absolute;
    },

    _addOrSubtractFromStartPoint : function(change) {
        const start = this.startPoint();
        const coords = this.coords;
        const newCoords = {};
        for (const key in coords) {
            if (!/^[xy]\d?$/.test(key)) {
                newCoords[key] = coords[key];
                continue;
            }

            const startCoord = (key === 'x' || key === 'x1' || key === 'x2')
                           ? start.x : start.y;
            newCoords[key] = coords[key] + (change * startCoord);
        }
        return newCoords;
    },

    toSVG: function() {
        let string = this.command;
        let separatorIndex = 0;
        for (const key in this.coords) {
            const coord = this.coords[key];
            let separator = this.separators[separatorIndex];
            if (separator === '' && /^\d/.test(coord) && /\d$/.test(string))
                separator = ' ';

            string += separator + coord;
            separatorIndex += 1;
        }
        return string;
    }
};
makeAllPropertiesReadOnly(SvgPathSegment.prototype);

function SvgOther(type, raw) {
    const object = {
        id: id++, // eslint-disable-line no-plusplus
        type,
        toSVG: () => raw
    };
    makeAllPropertiesReadOnly(object);
    return object;
}

function constructorToFunction(constructor) {
    return function() {
        const instance = Object.create(constructor.prototype);
        constructor.apply(instance, arguments); // eslint-disable-line prefer-rest-params
        Object.defineProperty(instance, 'constructor', {
            writable: false,
            configurable: false,
            enumerable: false,
            value: constructor
        });
        return instance;
    };
}

function arrayToSVG(nodes) {
    const results = [];
    for (const node of nodes) {
        const svg = (typeof node !== 'string') ? node.toSVG() : node;
        results.push(svg);
    }
    return results.join('');
}

function makeAllPropertiesReadOnly(object) {
    const keys = Object.getOwnPropertyNames(object);
    for (const key of keys) {
        const descriptor = Object.getOwnPropertyDescriptor(object, key);
        if (!descriptor || descriptor.get)
            continue;

        descriptor.writable = false;
        Object.defineProperty(object, key, descriptor);
    }
}

export default {
    root: constructorToFunction(SvgRoot),
    tag: constructorToFunction(SvgTag),
    pathSegment: constructorToFunction(SvgPathSegment),
    other: SvgOther
};