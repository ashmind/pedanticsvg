define(['jquery', './all.js'], function($, allRefactorings) {
    'use strict';

    var $body = $('body');
    var active;

    var $menu = $('<ol class="refactor-menu" hidden>')
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

        $menu.attr('hidden', '');
        active.$button.removeClass('active');
        active = null;
    };

    $body.on('mousedown', function(e) {
        if ($(e.target).is('.refactor-command, .refactor-button'))
            return;

        hideMenuIfActive();
    });

    $(document).on('click', '.refactor-button', function() {
        if (active && active.$button[0] === this)
            return;

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
        }).removeAttr('hidden');

        active = {
            context: context,
            $button: $button
        };
    });

    $(document).on('click', '.refactor-command', function() {
        var $command = $(this);
        var refactoring = $command.data('refactoring');
        var context = active.context;

        var changes = refactoring.refactor(context.astNodes);

        hideMenuIfActive();
        context.applyChanges(changes);
    });

    var buildRelevantMap = function(astNodes) {
        var any = false;
        var map = new Array(commands.length);
        for (var i = 0; i < commands.length; i++) {
            var relevantToAll = true;
            for (var j = 0; j < astNodes.length; j++) {
                var relevant = allRefactorings[i].relevant(astNodes[j]);
                if (!relevant) {
                    relevantToAll = false;
                    break;
                }
            }

            map[i] = relevantToAll;
            any = relevantToAll || any;
        }

        if (!any)
           return;

        return map;
    };

    var buildButton = function(astNodes, applyChanges) {
        var relevant = buildRelevantMap(astNodes);
        if (!relevant)
            return;

        return $('<button class="refactor-button">')
            .data('context', { astNodes: astNodes, applyChanges: applyChanges })
            .data('relevant', relevant);
    };

    var updateButton = function($button, astNodes) {
        var relevant = buildRelevantMap(astNodes);
        if (!relevant)
            return false;

        var context = $button.data('context');
        context.astNodes = astNodes;
        $button.data('relevant', relevant);
        return true;
    };

    return Object.freeze({
        buildWidget: buildButton,
        updateWidget: updateButton
    });
});