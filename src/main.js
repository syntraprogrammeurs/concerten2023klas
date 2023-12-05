

import { createApp,reactive } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const myAlert = reactive({alertBericht:''})

const app = createApp(App).provide('myAlertVar',myAlert)

app.use(createPinia())
app.use(router)

app.mount('#app')
