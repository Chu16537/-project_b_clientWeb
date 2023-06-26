import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import CONST from '@/script/const'
import UTIL from '@/script/utils'
// import axiosHandler from '@/script/axiosHandler'
import axiosHandlerMock from '@/script/axiosHandlerMock'

// 防止 table 因為螢幕縮放而出錯
UTIL.resizeError()

const app = createApp(App).use(ElementPlus).use(i18n).use(store).use(router)

// 帶入全域變數
app.config.globalProperties.$CONST = CONST
app.config.globalProperties.$UTIL = UTIL
// app.config.globalProperties.axiosHandler = axiosHandler
app.config.globalProperties.$axiosHandler = axiosHandlerMock

// app.mixin({
//     inject: ['updateLang']
// })
app.mount('#app')
