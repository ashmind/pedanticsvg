define(function() {
    'use strict';

    var id = 1;

    var SvgRoot = function() {
        this.type = 'root';
        this.children = [];
        makeAllPropertiesReadOnly(this);
    };
    SvgRoot.prototype = {
        toSVG: function() {
           return arrayToSVG(this.children);
        }
    };
    makeAllPropertiesReadOnly(SvgRoot.prototype);

    var SvgTag = function(name, attributes, children) {
        this.id = id++;
        this.type = 'tag';
        this.name = name;
        this.attributes = attributes || {};
        this.children = children || [];
        makeAllPropertiesReadOnly(this);
    };

    SvgTag.prototype = {
        toSVG: function() {
            /* jshint validthis:true */
            var result = '<' + this.name;
            var attributes = this.attributes;
            for (var name in attributes) {
                result += ' ' + name + '="' + attributes[name] + '"';
            }

            if (this.children.length > 0) {
                result += '>';
                result += arrayToSVG(this.children);
                result += '</' + this.name + '>';
            }
            else {
                result += '/>';
            }
            return result;
        }
    };
    makeAllPropertiesReadOnly(SvgTag.prototype);

    var SvgPathSegment = function(command, coords, separators, _cache) {
        this.id = id++;
        this.type = 'path-segment';
        this.command = command;
        this.coords = coords;
        this.separators = separators;
        this._cache = _cache || {};
        makeAllPropertiesReadOnly(this);
    };
    SvgPathSegment.prototype = {
        get isAbsolute() {
            return this._cache.absolute === this
                || this.command.toUpperCase() === this.command;
        },

        startPoint: function() {
            /* jshint shadow:true */
            if (this._cache.startPoint)
                return this._cache.startPoint;

            var siblings = this.parent.segments;
            var firstUncachedIndex = 0;
            for (var i = this.index-1; i >= 0; i--) {
                if (siblings[i]._cache.absolute) {
                    firstUncachedIndex = i+1;
                    break;
                }
            }

            // this prevents stack explosion that might have happened
            // if I just called toAbsolute() on previous
            for (var i = firstUncachedIndex; i < this.index; i++) {
                siblings[i].toAbsolute();
            }

            // and one more time backwards,
            // in case there are any H or V that do not give both coords
            var x;
            var y;
            for (var i = this.index-1; i >= 0; i--) {
                var precedingCoords = siblings[i].toAbsolute().coords;
                if (x === undefined && precedingCoords.x !== undefined)
                    x = precedingCoords.x;

                if (y === undefined && precedingCoords.y !== undefined)
                    y = precedingCoords.y;

                if (x !== undefined && y !== undefined)
                    break;
            }
            x = x || 0;
            y = y || 0;

            var startPoint = Object.freeze({ x: x, y: y });
            this._cache.startPoint = startPoint;
            return startPoint;
        },

        toRelative: function() {
            /* jshint newcap:false */
            if (this._cache.relative)
                return this._cache.relative;

            if (this.command.toLowerCase() === this.command) {
                this._cache.relative = this;
                return this;
            }

            var newCoords = this._addOrSubtractFromStartPoint(-1);
            var relative = new SvgPathSegment(this.command.toLowerCase(), newCoords, this.separators, this._cache);
            this._cache.relative = relative;
            return relative;
        },

        toAbsolute: function() {
            /* jshint newcap:false */
            if (this._cache.absolute)
                return this._cache.absolute;

            if (this.command.toUpperCase() === this.command) {
                this._cache.absolute = this;
                return this; // already absolute
            }

            var newCoords = this._addOrSubtractFromStartPoint(+1);
            var absolute = new SvgPathSegment(this.command.toUpperCase(), newCoords, this.separators, this._cache);
            this._cache.absolute = absolute;
            return absolute;
        },

        _addOrSubtractFromStartPoint : function(change) {
            var start = this.startPoint();
            var coords = this.coords;
            var newCoords = {};
            for (var key in coords) {
                if (!/^[xy]\d?$/.test(key)) {
                    newCoords[key] = coords[key];
                    continue;
                }

                var startCoord = (key === 'x' || key === 'x1' || key === 'x2')
                               ? start.x : start.y;
                newCoords[key] = coords[key] + (change * startCoord);
            }
            return newCoords;
        },

        toSVG: function() {
            var string = this.command;
            var separatorIndex = 0;
            for (var key in this.coords) {
                var coord = this.coords[key];
                var separator = this.separators[separatorIndex];
                if (separator === '' && /^\d/.test(coord) && /\d$/.test(string))
                    separator = ' ';

                string += separator + coord;
                separatorIndex += 1;
            }
            return string;
        }
    };
    makeAllPropertiesReadOnly(SvgPathSegment.prototype);

    var SvgOther = function(type, raw) {
        var object = {
            id: id++,
            type: type,
            toSVG: function() { return raw; }
        };
        makeAllPropertiesReadOnly(object);
        return object;
    };

    return {
        root: constructorToFunction(SvgRoot),
        tag: constructorToFunction(SvgTag),
        pathSegment: constructorToFunction(SvgPathSegment),
        other: SvgOther
    };

    function constructorToFunction(constructor) {
        return function() {
            var instance = Object.create(constructor.prototype);
            constructor.apply(instance, arguments);
            return instance;
        };
    }

    function arrayToSVG(nodes) {
        var results = [];
        for (var i = 0; i < nodes.length; i++) {
            var svg = (typeof nodes[i] !== 'string') ? nodes[i].toSVG() : nodes[i];
            results.push(svg);
        }
        return results.join('');
    }

    function makeAllPropertiesReadOnly(object) {
        for (var key in object) {
            var descriptor = Object.getOwnPropertyDescriptor(object, key);
            if (!descriptor || descriptor.get)
                continue;

            descriptor.writable = false;
            Object.defineProperty(object, key, descriptor);
        }
    }
});