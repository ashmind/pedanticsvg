define(['jquery', 'app/services/refactoring/all'], function($, allRefactorings) {
    'use strict';

    var $body = $('body');
    var active;

    var hideMenuIfActive = function() {
        if (!active)
            return;

        active.$menu.remove();
        active.$button.removeClass('active');
        active = null;
    };

    $body.on('mousedown', function(e) {
        if ($(e.target).is('.refactor-command'))
            return;

        hideMenuIfActive();
    });

    $(document).on('click', '.refactor-button', function(e) {
        hideMenuIfActive();

        var $button = $(this);
        var context = $button.data('context');
        var refactorings = $button.data('refactorings');

        $button.addClass('active');
        var $menu = $('<ol class="refactor-menu">');
        for (var i = 0; i < refactorings.length; i++) {
            $('<li class="refactor-command">')
                .data('refactoring', refactorings[i])
                .data('context', context)
                .text(refactorings[i].display)
                .appendTo($menu);
        }

        var buttonOffset = $button.offset();
        $menu.css({
            left: buttonOffset.left,
            top: buttonOffset.top + $button.height()
        });

        $menu.appendTo($body);

        active = { $button: $button, $menu: $menu };
        e.stopPropagation();
    });

    $(document).on('click', '.refactor-command', function() {
        var $command = $(this);
        var refactoring = $command.data('refactoring');
        var context = $command.data('context');

        var result = refactoring.refactor(context.astNode);

        hideMenuIfActive();
        context.applyChange(result);
    });

    return function(astNode, applyChange) {
        var relevant = allRefactorings.filter(function(r) {
            return r.relevant(astNode);
        });
        if (relevant.length === 0)
           return;

        return $('<button class="refactor-button">')
            .data('context', { astNode: astNode, applyChange: applyChange })
            .data('refactorings', relevant);
    };
});