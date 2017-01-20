import $ from 'jquery';

    $.extend($.fn, {
        svgAddClass: function(className) {
            for (const item of this) {
                item.classList.add(className);
            }
            return this;
        },

        svgRemoveClass: function(className) {
            for (const item of this) {
                item.classList.remove(className);
            }
            return this;
        }
    });