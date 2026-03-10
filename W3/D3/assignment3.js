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
