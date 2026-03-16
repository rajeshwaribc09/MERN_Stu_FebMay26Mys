//JSON settings merge
function mergeSettings(savedSettingsJSON, defaultSettings) {
    let savedSettings = JSON.parse(savedSettingsJSON);
    let merged = {};

    for (let key in defaultSettings) {
        merged[key] = defaultSettings[key];
    }
    for (let key in savedSettings) {
        merged[key] = savedSettings[key];
    }
    let mergedJSON = JSON.stringify(merged);
    return {
        mergedObject: merged,
        mergedJSON: mergedJSON
    };
}
let defaultSettings = {
    theme: "light",
    notifications: true,
    fontSize: 14
};

let savedSettingsJSON = '{"theme":"dark","fontSize":18}';

let result = mergeSettings(savedSettingsJSON, defaultSettings);

console.log(result.mergedObject);
console.log(result.mergedJSON);