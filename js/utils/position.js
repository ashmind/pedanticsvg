function Position(line, column) {
    return {
        line: line || 0,
        column: column || 0,

        advance: function(lineCount, columnCount) {
            if (lineCount > 0) {
                this.column = columnCount;
                this.line += lineCount;
            }
            else {
                this.column += columnCount;
            }
        },

        advanceByString : function(string) {
            const lines = string.split('\n');
            this.advance(lines.length - 1, lines[lines.length - 1].length);
        },

        clone: function() {
            return Position(this.line, this.column);
        },

        toObject: function() {
            return { line: this.line, column: this.column };
        },
    };
}

export default Position;
