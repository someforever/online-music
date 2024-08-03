import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import '@/assets/globalCss.css'
import $ from 'jquery'
import pinia from '@/stores/index'
// 如果需要全局挂载到window对象上
window.$ = window.jQuery = $
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
