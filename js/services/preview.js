define(['jquery'], function($) { 'use strict'; return function($preview) {
    var $iframe = $('<iframe>').appendTo($preview);
    var lastUnreleasedUrl;

    return {
        render: function(svg) {
            var blob = new Blob([svg], {type: 'image/svg+xml'});
            var url = URL.createObjectURL(blob);
            $iframe[0].contentWindow.location = url;

            if (lastUnreleasedUrl)
                URL.revokeObjectURL(lastUnreleasedUrl);
            lastUnreleasedUrl = url;
        }
    };
};});