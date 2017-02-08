import ast from './svg-ast.js';
import RegExpIterator from '../utils/regexp-iterator.js';
import Position from '../utils/position.js';

// This all is pretty terrible and should probably be rewritten
// using a proper parser.

const segmentRegexp = /([mlhvcsqtaz])((?:[\s,]*[\d.-]+)*)|(\s+)/i;
const coordRegexp = /-?(?:\d*\.)?\d+|([\s,]+)/i;
const coordKeys = {
    m: ['x', 'y'],
    l: ['x', 'y'],
    h: ['x'],
    v: ['y'],
    c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
    s: ['x2', 'y2', 'x', 'y'],
    q: ['x1', 'y1', 'x', 'y'],
    t: ['x', 'y'],
    a: ['rx', 'ry', 'x-axis-rotation', 'large-arg-flag', 'sweep-flag', 'x', 'y'], // this is an approximation, needs better numbers grammar
    z: []
};

export default function (path, outer) {
    outer = outer || {};
    const result = {
        segments: [],
        errors: []
    };

    const parent = outer.parent || { segments: result.segments };

    parse();
    return result;

    function parse() {
        const position = Position(
            outer.position ? outer.position.line : 0,
            outer.position ? outer.position.column : 0
        );
        const iterator = RegExpIterator(path, segmentRegexp);
        for (let item = iterator.next(); !item.done; item = iterator.next()) {
            const start = position.clone();
            position.advanceByString(item.value.string);

            const match = item.value.match;
            if (!match) {
                reportError(`Unexpected: '${item.value.string}'.`, start);
                continue;
            }

            if (match[3]) // whitespace, only matches if nothing else did
                continue;

            const command = match[1];
            const coords = match[2];
            parseCoords(command, coords, start);
        }
    }

    function parseCoords(command, allCoordsString, position) {
        let firstCoords = true;
        let coords = { _count: 0 };
        let separators = [];
        const keys = coordKeys[command.toLowerCase()];
        let start = position.toObject();
        if (keys === undefined) {
            reportError(`Unknown command '${command}'.`, start);
            return;
        }

        position.advanceByString(command);

        const iterator = RegExpIterator(allCoordsString, coordRegexp);
        for (let item = iterator.next(); !item.done; item = iterator.next()) {
            const string = item.value.string;
            position.advanceByString(string);
            if (!item.value.match) {
                reportError(`Unexpected: ${string}.`, start);
                start = position.toObject();
                coords = { _count: 0 };
                continue;
            }

            const separator = item.value.match[1];
            if (separator) {
                if (coords._count === 0 && !firstCoords) {
                    // ignore separator between groups for position
                    start = position.toObject();
                }

                separators.push(separator);
                continue;
            }

            coords[keys[coords._count]] = parseFloat(string);
            coords._count += 1;
            if (separators.length < coords._count)
                separators.push('');

            if (coords._count < keys.length)
                continue;

            const end = position.toObject();
            delete coords._count;
            addSegment(command, coords, separators, start, end, firstCoords);
            separators = [];
            coords = { _count: 0 };
            firstCoords = false;
            start = end;
        }

        if (keys.length === 0)
            addSegment(command, {}, [], start, position.toObject(), firstCoords);

        if (coords._count > 0)
            reportError(`Segment '${command}' must have exactly ${keys.length} values.`, start);
    }

    function addSegment(command, coords, separators, start, end, first) {
        const index = result.segments.length;
        const segment = ast.pathSegment(command, coords, separators);
        segment.start = start;
        segment.end = end;
        segment.parent = parent;
        segment.index = index;
        segment.implicitCommand = !first;
        result.segments.push(segment);
    }

    function reportError(message, position) {
        position = position.toObject ? position.toObject() : position;
        result.errors.push({
            message,
            line: position.line,
            column: position.column
        });
    }
}