/* globals define:false, require:false, module:false */

(function (root, factory) {
    "use strict";

    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(["codemirror"], factory);
    } else if (typeof exports === "object") {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require("codemirror"));
    } else {
        // Browser globals (root is window)
        root._modules = root._modules || {};
        root._modules["xml-hint-keys"] = factory(window.CodeMirror);
    }
}(this, function(CodeMirror) {
    "use strict";

    var showHintOptions = {
        completeSingle: false,
        closeCharacters: /[\?!\s()\[\]{};>,]/,
        extraKeys: {
            Space: pickThenInsertChar(" "),
            "=": pickThenInsertChar("=")
        }
    };

    function completeAfter(cm, condition) {
        if (!condition || condition(cm)) {
            setTimeout(function() {
                if (!cm.state.completionActive)
                    cm.showHint(showHintOptions);
            }, 100);
        }

        return CodeMirror.Pass;
    }

    function completeIfAfterLt(cm) {
        return completeAfter(cm, function() {
            var cursor = cm.getCursor();
            return cm.getRange(CodeMirror.Pos(cursor.line, cursor.ch - 1), cursor) === "<";
        });
    }

    function completeIfInTag(cm) {
        return completeAfter(cm, inTag);
    }

    function inTag(cm) {
        var token = cm.getTokenAt(cm.getCursor());
        if (token.type === "string" && (!/['"]/.test(token.string.charAt(token.string.length - 1)) || token.string.length === 1))
            return false;

        var inner = CodeMirror.innerMode(cm.getMode(), token.state).state;
        return inner.tagName;
    }

    function pickThenInsertChar(char) {
        return function(cm, handle) {
            handle.pick();
            cm.replaceSelection(char);
            completeIfInTag(cm);
        };
    }

    return {
        "'<'": completeAfter,
        "'/'": completeIfAfterLt,
        "' '": completeIfInTag,
        "'='": completeIfInTag,
        "Ctrl-Space": "autocomplete"
    };
}));