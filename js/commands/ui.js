import commands from './all.js';

function appendCommand($location, command, invoke) {
    let $element;
    if (command.type !== 'toggle') {
        $element = $('<button>');
        $element.click(function() {
            invoke(command);
        });
    }
    else {
        $element = $('<input type="checkbox">');
        applyToggleState($element, command, command.state);

        $element.change(function(e) {
            e.preventDefault();
            const newState = invoke(command);
            applyToggleState($element, command, newState);
        });
    }

    $element
        .addClass('command command-' + command.name)
        .attr('title', command.title)
        .appendTo($location);
}

function applyToggleState($element, command, newState) {
    command.state = newState;
    $element[0].checked = newState;
}

export default function (locations, editor, preview) {
    const invoke = function(command) {
        return command.action(editor, preview);
    };

    for (let command of commands) {
        let $location = locations[command.section];
        appendCommand($location, command, invoke);
    }
}