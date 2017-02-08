import $ from 'jquery';
import allRefactorings from './all.js';

const $body = $('body');
let active;

const $menu = $('<ol class="refactor-menu" hidden>')
    .appendTo($body);

const commands = [];
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

$body.on('mousedown', e => {
    if ($(e.target).is('.refactor-command, .refactor-button'))
        return;

    hideMenuIfActive();
});

$(document).on('click', '.refactor-button', function() {
    /* eslint-disable no-invalid-this */
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

    active = { context, $button };
    /* eslint-enable no-invalid-this */
});

$(document).on('click', '.refactor-command', function() {
    /* eslint-disable no-invalid-this */
    const $command = $(this);
    const refactoring = $command.data('refactoring');
    const context = active.context;

    const changes = refactoring.refactor(context.astNodes);

    hideMenuIfActive();
    context.applyChanges(changes);
    /* eslint-enable no-invalid-this */
});

const buildRelevantMap = astNodes => {
    let any = false;
    const map = new Array(commands.length);
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
       return null;

    return map;
};

const buildButton = function(astNodes, applyChanges) {
    const relevant = buildRelevantMap(astNodes);
    if (!relevant)
        return null;

    return $('<button class="refactor-button">')
        .data('context', { astNodes, applyChanges })
        .data('relevant', relevant);
};

const updateButton = function($button, astNodes) {
    const relevant = buildRelevantMap(astNodes);
    if (!relevant)
        return false;

    const context = $button.data('context');
    context.astNodes = astNodes;
    $button.data('relevant', relevant);
    return true;
};

export default Object.freeze({
    buildWidget: buildButton,
    updateWidget: updateButton
});
