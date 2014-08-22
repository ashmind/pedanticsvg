define(['jquery'], function($) {
    'use strict';

    $.extend($.fn, {
        svgAddClass: function(className) {
            for (var i = 0; i < this.length; i++) {
                this[i].classList.add(className);
            }
            return this;
        },

        svgRemoveClass: function(className) {
            for (var i = 0; i < this.length; i++) {
                this[i].classList.remove(className);
            }
            return this;
        }
    });
});