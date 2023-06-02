export function SetValue (key, value) {
    localStorage.setItem(key, value)
}

export function GetValue (key) {
    return localStorage.getItem(key)
}

export function NowLang () {
    return GetValue('lang') !== undefined ? GetValue('lang') : 'en'
}
