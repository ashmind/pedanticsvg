define(function() {
    'use strict';

    var settingsKey = 'psvg.settings';
    var settings;

    (function load() {
        var settingsString = localStorage[settingsKey];
        if (!settingsString)
            return;

        try {
            settings = JSON.parse(settingsString);
        }
        catch (e) {
            if (window.console && window.console.error)
                window.console.error(e);
        }
    })();

    settings = (typeof settings === 'object') ? settings : {};
    return {
        get: function(key) { return settings[key]; },
        set: function(key, value) {
            settings[key] = value;
            localStorage[settingsKey] = JSON.stringify(settings);
        }
    };
});