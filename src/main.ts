import './assets/main.scss'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.min.css'

import { createApp } from 'vue'
import App from './App.vue'

import plugins from './plugins'

const app = createApp(App)

app.use(plugins)

app.mount('#app')
