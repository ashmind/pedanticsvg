export default function(string, regexp) {
    let index = 0;
    let nextResult;

    regexp = new RegExp('^(?:' + regexp.source + ')', regexp.ignoreCase ? 'i' : '');
    return {
        next: function() {
            if (index >= string.length)
                return { done: true };

            let result;
            if (nextResult) {
                result = nextResult;
                nextResult = null;
                return { value: result, done: false };
            }

            result = next(string, index, regexp);
            index += result.string.length;
            nextResult = result._next;
            delete result._next;
            return { value: result, done: false };
        }
    };
}

function next(string, index, regexp) {
    let errorStart = 0;
    let match = regexp.exec(string.substring(index));
    if (!match) {
        errorStart = index;
        while (!match && index < string.length) {
            index += 1;
            match = regexp.exec(string.substring(index));
        }

        let result = {
            string: string.substring(errorStart, index)
        };
        if (match) {
            result._next = {
                string: match[0],
                match: match
            };
        }

        return result;
    }

    return {
        string: match[0],
        match: match
    };
}