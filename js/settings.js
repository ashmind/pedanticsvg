const settingsKey = 'psvg.settings';
let values;

(function load() {
    const settingsString = localStorage[settingsKey];
    if (!settingsString)
        return;

    try {
        values = JSON.parse(settingsString);
    }
    catch (e) {
        if (window.console && window.console.error)
            window.console.error(e);
    }
})();

values = (typeof values === 'object') ? values : {};
const settings = {};

function createSetting(key, _default) {
    const watchers = [];
    if (values[key] === undefined)
        values[key] = _default;

    return {
        get key() {
            return key;
        },
        get value() {
            return values[key];
        },
        set value(newValue) {
            if (newValue === values[key])
                return;

            values[key] = newValue;
            for (const watcher of watchers) {
                watcher(newValue);
            }
            localStorage[settingsKey] = JSON.stringify(values);
        },
        watch: function(watcher) {
            watchers.push(watcher);
        }
    };
}
export default function(key, _default) {
    let setting = settings[key];
    if (!setting) {
        setting = createSetting(key, _default);
        settings[key] = setting;
    }

    return setting;
}