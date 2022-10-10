import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import custom_style from './assets/custom-style.css'
import style from './assets/style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
