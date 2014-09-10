define(['app/commands/all'], function(commands) {
    'use strict';

    return function (locations, editor, preview) {
        var invoke = function(command) {
            return command.action(editor, preview);
        };

        for (var i = 0; i < commands.length; i++) {
            var command = commands[i];
            var $location = locations[command.section];
            appendCommand($location, command, invoke);
        }
    };

    function appendCommand($location, command, invoke) {
        var $element;
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
                var newState = invoke(command);
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
});