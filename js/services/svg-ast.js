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

    var SvgPathSegment = function(command, coords, _cache) {
        this.id = id++;
        this.type = 'path-segment';
        this.command = command;
        this.coords = coords;
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

            if (this.isAbsolute) {
                var startPoint = Object.freeze({
                    x: this.coords.x || 0,
                    y: this.coords.y || 0
                });
                this._cache.startPoint = startPoint;
                return startPoint;
            }

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

        toAbsolute: function() {
            /* jshint newcap:false, shadow:true */
            if (this._cache.absolute)
                return this._cache.absolute;

            if (this.command.toUpperCase() === this.command) {
                this._cache.absolute = this;
                return this; // already absolute
            }

            var start = this.startPoint();
            var coords = this.coords;
            var newCoords = {};
            for (var key in coords) {
                if (!/^[xy]\d?$/.test(key)) {
                    newCoords[key] = coords[key];
                    continue;
                }

                newCoords[key] = coords[key] +
                    ((key === 'x' || key === 'x1' || key === 'x2') ? start.x : start.y);
            }

            var absolute = new SvgPathSegment(this.command.toUpperCase(), newCoords, this._cache);
            this._cache.absolute = absolute;
            return absolute;
        },

        toSVG: function() {
            var string = this.command;
            for (var key in this.coords) {
                string += ' ' + this.coords[key];
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
        root: function() { return new SvgRoot(); },
        tag: function(name, attributes, children) {
            return new SvgTag(name, attributes, children);
        },
        pathSegment: function(command, coords) {
            return new SvgPathSegment(command, coords);
        },
        other: SvgOther
    };

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