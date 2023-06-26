import { createI18n } from 'vue-i18n'
// import { createI18n } from 'vue-i18n/dist/vue-i18n.cjs.js' // 使用 cjs 版本
import { NowLang } from '../script/localStorage'
const messages = require('./lang.json')

const i18n = createI18n({
    legacy: false,
    locale: NowLang(), // 預設語言
    messages
})

export default i18n
