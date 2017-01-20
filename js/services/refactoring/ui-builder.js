import $ from 'jquery';
import allRefactorings from './all.js';

const $body = $('body');
let active;

const $menu = $('<ol class="refactor-menu" hidden>')
    .appendTo($body);

let commands = [];
for (const item of allRefactorings) {
    const $command = $('<li class="refactor-command">')
        .data('refactoring', item)
        .text(item.display)
        .appendTo($menu);
    commands.push($command);
}

const hideMenuIfActive = function() {
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

    const $button = $(this);
    const context = $button.data('context');
    const relevant = $button.data('relevant');
    for (let i = 0; i < relevant.length; i++) {
        commands[i].toggle(relevant[i]);
    }
    $button.addClass('active');

    const buttonOffset = $button.offset();
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
    const $command = $(this);
    const refactoring = $command.data('refactoring');
    let context = active.context;

    const changes = refactoring.refactor(context.astNodes);

    hideMenuIfActive();
    context.applyChanges(changes);
});

let buildRelevantMap = function(astNodes) {
    let any = false;
    let map = new Array(commands.length);
    for (let i = 0; i < commands.length; i++) {
        let relevantToAll = true;
        for (const item of astNodes) {
            const relevant = allRefactorings[i].relevant(item);
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

let buildButton = function(astNodes, applyChanges) {
    const relevant = buildRelevantMap(astNodes);
    if (!relevant)
        return;

    return $('<button class="refactor-button">')
        .data('context', { astNodes: astNodes, applyChanges: applyChanges })
        .data('relevant', relevant);
};

let updateButton = function($button, astNodes) {
    const relevant = buildRelevantMap(astNodes);
    if (!relevant)
        return false;

    let context = $button.data('context');
    context.astNodes = astNodes;
    $button.data('relevant', relevant);
    return true;
};

export default Object.freeze({
    buildWidget: buildButton,
    updateWidget: updateButton
});
