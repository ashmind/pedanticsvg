/* globals module:true */

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
        factory(window.CodeMirror);
    }
})(this, function(CodeMirror) {
    'use strict';

    // node: { id, start: Pos, end: Pos }

    CodeMirror.defineOption('trackNodesInSelection', null, function(cm, option, previous) {
        if (previous && previous._cursorActivity) {
            cm.off('cursorActivity', previous._cursorActivity);
            return;
        }

        if (!option)
            return;

        var currentNodes = [];
        var updateNodesWrapper = function() {
            updateNodes(cm, currentNodes, option.getNodes);
        };

        option._updateNodes = updateNodesWrapper;
        cm.on('cursorActivity', updateNodesWrapper);
    });

    CodeMirror.defineExtension('refreshNodesInSelection', function() {
        var option = this.getOption('trackNodesInSelection');
        option._updateNodes();
    });

    function updateNodes(cm, currentNodes, getNodes) {
        /* jshint shadow:true */

        var selections = cm.listSelections();
        var newNodes = getNodes(cm, selections);
        var event = { added: [], removed: [] };

        var newUnmatched = {};
        for (var i = 0; i < newNodes.length; i++) {
            var newNode = newNodes[i];
            newUnmatched[newNode.id] = newNode;
        }

        for (var i = 0; i < currentNodes.length; i++) {
            var node = currentNodes[i];
            var matched = newUnmatched[node.id];
            if (!matched) {
                node._marker.clear();
                currentNodes.splice(i, 1);
                i -= 1;
                event.removed.push(node);
                continue;
            }

            delete newUnmatched[node.id];
        }

        for (var key in newUnmatched) {
            var newNode = newUnmatched[key];
            newNode._marker = cm.markText(newNode.start, newNode.end, {
                className: 'cm-node-in-selection'
            });
            currentNodes.push(newNode);
            event.added.push(newNode);
        }

        CodeMirror.signal(cm, 'nodesInSelectionChanged', cm, event);
    }
});