let settings = {};

const setSettingForKey = (key, value) => {
    return settings[key] = value;
}

const getSettingForKey = (key) => {
    return settings[key];
}

export {
    getSettingForKey,
    setSettingForKey
}
