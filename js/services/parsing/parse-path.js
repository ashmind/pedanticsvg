define(['app/utils/regexp-iterator', 'app/utils/position'], function(RegExpIterator, Position) {
    'use strict';

    // This all is pretty terrible and should probably be rewritten
    // using a proper parser.

    var segmentRegexp = /([mlhvcsqtaz])((?:[\s,]*[\d\.\-]+)*)|(\s+)/i;
    var coordRegexp = /\-?(?:\d*\.)?\d+|([\s,]+)/i;
    var coordRules = {
        m: { count: 2, keys: ['x', 'y'] },
        l: { count: 2, keys: ['x', 'y'] },
        h: { count: 1, keys: ['x'] },
        v: { count: 1, keys: ['y'] },
        c: { count: 6, keys: ['x1', 'y1', 'x2', 'y2', 'x', 'y'] },
        s: { count: 4, keys: ['x2', 'y2', 'x', 'y'] },
        q: { count: 4, keys: ['x1', 'y1', 'x', 'y'] },
        t: { count: 2, keys: ['x', 'y'] },
        a: '?', // needs beter grammar
        z: { count: 0 }
    };

    return function (path, outer) {
        outer = outer || {};
        var idPrefix = outer.id || '';
        var id = 1;

        var result = {
            segments: [],
            errors: []
        };

        parse();
        return result;

        function parse() {
            /* jshint newcap:false */
            var position = Position(
                outer.position ? outer.position.line : 0,
                outer.position ? outer.position.column : 0
            );
            var iterator = RegExpIterator(path, segmentRegexp);
            for (var item = iterator.next(); !item.done; item = iterator.next()) {
                var start = position.clone();
                position.advanceByString(item.value.string);

                var match = item.value.match;
                if (!match) {
                    reportError('Unexpected: \'' + item.value.string + '\'.', start);
                    continue;
                }

                if (match[3]) // whitespace, only matches if nothing else did
                    continue;

                var command = match[1];
                var coords = match[2];
                parseCoords(command, coords, start);
            }
        }

        function parseCoords(command, allCoordsString, position) {
            /* jshint newcap:false */
            var firstCoords = true;
            var coords = { _count: 0 };
            var rule = coordRules[command.toLowerCase()];
            var start = position.toObject();
            if (rule === '?') {
                reportError('Segment \'' + command + '\' is not yet supported.', start);
                return;
            }

            position.advanceByString(command);

            var iterator = RegExpIterator(allCoordsString, coordRegexp);
            for (var item = iterator.next(); !item.done; item = iterator.next()) {
                var string = item.value.string;
                position.advanceByString(string);
                if (!item.value.match) {
                    reportError('Unexpected: \'' + string + '\'.', start);
                    start = position.toObject();
                    coords = { _count: 0 };
                    continue;
                }

                if (item.value.match[1]) { // whitespace
                    if (coords._count === 0 && !firstCoords) {
                        // skip initial whitespace
                        start = position.toObject();
                    }

                    continue;
                }

                coords[rule.keys[coords._count]] = parseFloat(string);
                coords._count += 1;
                if (coords._count < rule.count)
                    continue;

                var end = position.toObject();
                delete coords._count;
                addSegment(command, coords, start, end);
                coords = { _count: 0 };
                firstCoords = false;
                start = end;
            }

            if (rule.count === 0)
                addSegment(command, {}, start, position.toObject());

            if (coords._count > 0)
                reportError('Segment \'' + command + '\' must have exactly ' + rule.count + ' values.', start);
        }

        function addSegment(command, coords, start, end) {
            /* jshint newcap:false */

            var index = result.segments.length;
            var segment = Segment(idPrefix + '-segment-' + id++, command, coords, start, end);
            segment.index = index;
            segment.parentList = result.segments;
            result.segments.push(segment);
        }

        function reportError(message, position) {
            position = position.toObject ? position.toObject() : position;
            result.errors.push({
                message: message,
                line: position.line,
                column: position.column
            });
        }
    };

    function Segment(id, command, coords, start, end) {
        var segment = {
            id: id,
            type: 'path-segment',
            command: command,
            coords: coords,
            start: start,
            end: end,

            _cache: {}
        };

        segment.isAbsolute = function() {
            return segment._cache.absolute === this
                || segment.command.toUpperCase() === segment.command;
        };

        segment.startPoint = function() {
            /* jshint shadow:true */
            if (this._cache.startPoint)
                return this._cache.startPoint;

            if (this.isAbsolute()) {
                var startPoint = Object.freeze({
                    x: this.coords.x || 0,
                    y: this.coords.y || 0
                });
                this._cache.startPoint = startPoint;
                return startPoint;
            }

            var segments = this.parentList;
            var firstUncachedIndex = 0;
            for (var i = this.index-1; i >= 0; i--) {
                if (segments[i]._cache.absolute) {
                    firstUncachedIndex = i+1;
                    break;
                }
            }

            // this prevents stack explosion that might have happened
            // if I just called toAbsolute() on previous
            for (var i = firstUncachedIndex; i < this.index; i++) {
                segments[i].toAbsolute();
            }

            // and one more time backwards,
            // in case there are any H or V that do not give both coords
            var x;
            var y;
            for (var i = this.index-1; i >= 0; i--) {
                var precedingCoords = segments[i].toAbsolute().coords;
                if (precedingCoords.x !== undefined)
                    x = precedingCoords.x;

                if (precedingCoords.y !== undefined)
                    y = precedingCoords.y;

                if (x !== undefined && y !== undefined)
                    break;
            }
            x = x || 0;
            y = y || 0;

            var startPoint = Object.freeze({ x: x, y: y });
            this._cache.startPoint = startPoint;
            return startPoint;
        };

        segment.toAbsolute = function() {
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
                newCoords[key] = coords[key] +
                    ((key === 'x' || key === 'x1' || key === 'x2') ? start.x : start.y);
            }

            var absolute = Segment('_clone_', this.command.toUpperCase(), newCoords);
            absolute._cache = this._cache;
            segment._cache.absolute = absolute;
            return absolute;
        };

        segment.stringify = function() {
            var string = this.command;
            for (var key in this.coords) {
                string += ' ' + this.coords[key];
            }
            return string;
        };

        return segment;
    }
});