define(['jquery', 'app/services/refactoring/all'], function($, allRefactorings) {
    'use strict';

    var $body = $('body');
    var active;

    var $menu = $('<ol class="refactor-menu">')
        .hide()
        .appendTo($body);

    var commands = [];
    for (var i = 0; i < allRefactorings.length; i++) {
        var $command = $('<li class="refactor-command">')
            .data('refactoring', allRefactorings[i])
            .text(allRefactorings[i].display)
            .appendTo($menu);
        commands.push($command);
    }

    var hideMenuIfActive = function() {
        if (!active)
            return;

        $menu.hide();
        active.$button.removeClass('active');
        active = null;
    };

    $body.on('mousedown', function(e) {
        if ($(e.target).is('.refactor-command'))
            return;

        hideMenuIfActive();
    });

    $(document).on('click', '.refactor-button', function() {
        hideMenuIfActive();

        var $button = $(this);
        var context = $button.data('context');
        var relevant = $button.data('relevant');
        for (var i = 0; i < relevant.length; i++) {
            commands[i].toggle(relevant[i]);
        }
        $button.addClass('active');

        var buttonOffset = $button.offset();
        $menu.css({
            left: buttonOffset.left,
            top: buttonOffset.top + $button.height()
        }).show();

        active = {
            context: context,
            $button: $button
        };
    });

    $(document).on('click', '.refactor-command', function() {
        var $command = $(this);
        var refactoring = $command.data('refactoring');
        var context = active.context;

        var result = refactoring.refactor(context.astNode);

        hideMenuIfActive();
        context.applyChange(result);
    });

    return function(astNode, applyChange) {
        var anyRelevant = false;
        var relevantList = new Array(commands.length);
        for (var i = 0; i < commands.length; i++) {
            var relevant = allRefactorings[i].relevant(astNode);
            if (relevant)
                anyRelevant = true;
            relevantList[i] = relevant;
        }

        if (!anyRelevant)
           return;

        return $('<button class="refactor-button">')
            .data('context', { astNode: astNode, applyChange: applyChange })
            .data('relevant', relevantList);
    };
});