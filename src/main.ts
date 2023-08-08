import { createPinia } from 'pinia'
// 使用 Tailwind CSS 已经做了重置浏览器基础样式的工作
// import 'reset-css'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
