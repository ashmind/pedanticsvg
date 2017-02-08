import $ from 'jquery';
import commands from './all.js';

function appendCommand($location, command, invoke) {
    let $element;
    if (command.type !== 'toggle') {
        $element = $('<button>');
        $element.click(() => invoke(command));
    }
    else {
        $element = $('<input type="checkbox">');
        applyToggleState($element, command, command.state);

        $element.change(e => {
            e.preventDefault();
            const newState = invoke(command);
            applyToggleState($element, command, newState);
        });
    }

    $element
        .addClass(`command command-${command.name}`)
        .attr('title', command.title)
        .appendTo($location);
}

function applyToggleState($element, command, newState) {
    command.state = newState;
    $element[0].checked = newState;
}

export default (locations, editor, preview) => {
    const invoke = command => command.action(editor, preview);
    for (const command of commands) {
        const $location = locations[command.section];
        appendCommand($location, command, invoke);
    }
};