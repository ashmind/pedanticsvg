define(['app/utils/regexp-iterator', 'app/utils/position'], function(RegExpIterator, Position) {
    'use strict';

    var segmentRegexp = /([mlhvcsqtaz])((?:\s*[\d\.\-]+)*)|(\s+)/i;
    var coordRegexp = /\-?(?:\d*\.)?\d+|(\s+)/i;
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

    return function(path, outerPosition) {
        /* jshint newcap:false */
        var position = Position(
            outerPosition ? outerPosition.line : 0,
            outerPosition ? outerPosition.column : 0
        );

        var result = {
            segments: [],
            errors: []
        };

        var iterator = RegExpIterator(path, segmentRegexp);
        for (var item = iterator.next(); !item.done; item = iterator.next()) {
            var start = position.clone();
            position.advanceByString(item.value.string);

            var match = item.value.match;
            if (!match) {
                reportError(result, 'Unexpected: \'' + item.value.string + '\'.', start);
                continue;
            }

            if (match[3]) // whitespace, only matches if nothing else did
                continue;

            var command = match[1];
            var coords = match[2];
            splitCoordsAndCollect(result, command, coords, start);
        }

        return result;
    };

    function splitCoordsAndCollect(result, command, allCoordsString, position) {
        /* jshint newcap:false */
        var firstCoords = true;
        var coords = { _count: 0 };
        var rule = coordRules[command.toLowerCase()];
        var start = position.toObject();
        position.advanceByString(command);

        var iterator = RegExpIterator(allCoordsString, coordRegexp);
        for (var item = iterator.next(); !item.done; item = iterator.next()) {
            var string = item.value.string;
            position.advanceByString(string);
            if (!item.value.match) {
                reportError(result, 'Unexpected: \'' + string + '\'.', start);
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
            addSegment(result, command, coords, start, end);
            coords = { _count: 0 };
            firstCoords = false;
            start = end;
        }

        if (rule.count === 0)
            addSegment(result, command, {}, start, position.toObject());

        if (coords._count > 0)
            reportError(result, 'Segment \'' + command + '\' must have exactly ' + rule.count + ' values.', start);
    }

    function addSegment(result, command, coords, start, end) {
        var index = result.segments.length;
        result.segments.push({
            type: 'path-segment',
            index: index,
            parentList: result.segments,
            command: command,
            coords: coords,
            start: start,
            end: end,

            startPoint: segmentStartPoint,
            toAbsolute: segmentToAbsolute,
            stringify: segmentStringify,

            _cache: {} // not frozen
        });
    }

    function reportError(result, message, position) {
        position = position.toObject ? position.toObject() : position;
        result.errors.push({
            message: message,
            line: position.line,
            column: position.column
        });
    }

    function segmentStartPoint() {
        /* jshint validthis:true, shadow:true */
        if (this._cache.startPoint)
            return this._cache.startPoint;

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
    }

    function segmentToAbsolute() {
        /* jshint validthis:true, shadow:true */
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

        var absolute = Object.freeze({
            type: this.type,
            command: this.command.toUpperCase(),
            coords: newCoords,

            startPoint: segmentStartPoint,
            toAbsolute: segmentToAbsolute,
            stringify: segmentStringify,

            _cache: this._cache
        });
        this._cache.absolute = absolute;
        return absolute;
    }

    function segmentStringify() {
        /* jshint validthis:true */
        var string = this.command;
        for (var key in this.coords) {
            string += ' ' + this.coords[key];
        }
        return string;
    }
});