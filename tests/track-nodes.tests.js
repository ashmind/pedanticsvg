/* globals describe:false, it:false, expect:false */

describe('app/codemirror/track-nodes', ['codemirror'], function(_, CodeMirrorFake) {
    'use strict';

    it('preserves node order on update', function() {
        var nodesRef = { nodes: [{id:1},{id:3}] };
        var cm = fakeCodeMirror(nodesRef);

        cm.refreshNodesInSelection();
        nodesRef.nodes = [{id:1},{id:2},{id:5}];
        var change = cm.refreshNodesInSelection();

        expect(change.nodes.map(function(n) {
            return n.id;
        })).toEqual([1, 2, 5]);
    });

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