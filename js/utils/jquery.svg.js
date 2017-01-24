import $ from 'jquery';

    $.extend($.fn, {
        svgAddClass: function(className) {
            for (let i = 0; i < this.length; i++) {
                this[i].classList.add(className);
            }
            return this;
        },

        svgRemoveClass: function(className) {
            for (let i = 0; i < this.length; i++) {
                this[i].classList.remove(className);
            }
            return this;
        }
    });