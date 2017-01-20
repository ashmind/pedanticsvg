/* globals describe:false, it:false, expect:false */

import CodeMirrorFake from './utils/codemirror-fake.js';
import '/js/codemirror/track-nodes.js';

describe('codemirror/track-nodes', () => {
    [{
        initial:  [1,3],
        updated:  [1,2,5],
        expected: [1,2,5]
    },{
        initial:  [4],
        updated:  [1,2,3,4],
        expected: [1,2,3,4]
    }].forEach((test, index) => {
        it('preserves node order on update ' + index, () => {
            const nodesRef = { nodes: test.initial.map(node) };
            const cm = fakeCodeMirror(nodesRef);

            cm.refreshNodesInSelection();
            nodesRef.nodes = test.updated.map(node);
            const change = cm.refreshNodesInSelection();

            expect(change.nodes.map(n => n.id))
                .toEqual(test.expected);
        });
    });

    function node(id) {
        return { id: id };
    }

    function fakeCodeMirror(nodesRef) {
        /* jshint newcap:false */
        const cm = CodeMirrorFake();
        cm.listSelections = () => [];
        cm.setOption('trackNodesInSelection', {
            getNodes: () => nodesRef.nodes
        });
        return cm;
    }
});