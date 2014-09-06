/* globals define:false, require:false, module:false */

(function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['codemirror'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('codemirror'));
    } else {
        // Browser globals (root is window)
        root._modules = root._modules || {};
        root._modules['xml-hint-keys'] = factory(window.CodeMirror);
    }
}(this, function(CodeMirror) {
    /* jshint quotmark:false */

    'use strict';

    CodeMirror.defineOption('xmlHintExtra', null, function(cm, option) {
        var mapName = 'xmlHintKeys';

        if (!option) {
            cm.removeKeyMap(mapName);
            return;
        }

        cm.addKeyMap({
            name:  mapName,
            "'<'": completeAfter,
            "'/'": completeIfAfterLt,
            "' '": completeIfInTag,
            "'='": insertQuotesIfInTag,
            "'":   completeIfInTag,
            "Ctrl-Space": "autocomplete"
        });
        cm.on('pickCompletion', function(cm) {
            var completion = cm.state.completionActive;
            var data = completion.widget.data;
            insertExtraAfterPick(cm, data);
        });
    });

    var showHintOptions = {
        completeSingle: false,
        closeCharacters: /[\?!\s()\[\]{};>,]/,
        extraKeys: {
            Space: pickIf('tag'),
            '=':   pickIf('attribute-name')
        }
    };

    function completeAfter(cm, condition) {
        if (!condition || condition(cm)) {
            setTimeout(function() { showCompletion(cm); }, 100);
        }

        return CodeMirror.Pass;
    }

    function showCompletion(cm) {
        if (cm.state.completionActive)
            return;

        cm.showHint(showHintOptions);
    }

    function insertExtraAfterPick(cm, data) {
        if (data.type === 'attribute-name') {
            insertAroundCursor(cm, '="', '"');
            completeIfInTag(cm);
            return;
        }

        if (data.type === 'tag') {
            insertAroundCursor(cm, ' ');
            completeIfInTag(cm);
            return;
        }
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

    function insertQuotesIfInTag(cm) {
        if (!inTag(cm))
            return;

        cm.operation(function() {
            insertAroundCursor(cm, '="', '"');
        });
        completeIfInTag(cm);
    }

    function inTag(cm) {
        var token = cm.getTokenAt(cm.getCursor());
        if (token.type === 'string' && (!/['"]/.test(token.string.charAt(token.string.length - 1)) || token.string.length === 1))
            return false;

        var inner = CodeMirror.innerMode(cm.getMode(), token.state).state;
        return inner.tagName;
    }

    function pickIf(hintType) {
        return function(cm, handle) {
            if (handle.data.type !== hintType)
                return CodeMirror.Pass;

            handle.pick();
        };
    }

    function insertAroundCursor(cm, before, after) {
        cm.replaceSelection(before);
        if (!after)
            return;

        var cursor = cm.getCursor();
        cm.replaceSelection(after);
        cm.setCursor(cursor);
    }
}));