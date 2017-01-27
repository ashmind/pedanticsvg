/* globals describe:false, it:false, expect:false */

import CodeMirrorFake from './utils/codemirror-fake.js';
import '/js/codemirror/track-nodes.js';

describe('codemirror/track-nodes', function() {
    [{
        initial:  [1,3],
        updated:  [1,2,5],
        expected: [1,2,5]
    },{
        initial:  [4],
        updated:  [1,2,3,4],
        expected: [1,2,3,4]
    }].forEach(function(test, index) {
        it('preserves node order on update ' + index, function() {
            var nodesRef = { nodes: test.initial.map(node) };
            var cm = fakeCodeMirror(nodesRef);

            cm.refreshNodesInSelection();
            nodesRef.nodes = test.updated.map(node);
            var change = cm.refreshNodesInSelection();

            expect(change.nodes.map(function(n) { return n.id; }))
                .toEqual(test.expected);
        });
    });

    function node(id) {
        return { id: id };
    }

    function fakeCodeMirror(nodesRef) {
        /* jshint newcap:false */
        var cm = CodeMirrorFake();
        cm.listSelections = function() { return []; };
        cm.setOption('trackNodesInSelection', {
            getNodes: function() { return nodesRef.nodes; }
        });
        return cm;
    }
});