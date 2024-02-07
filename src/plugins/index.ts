import type { App } from 'vue'
import { createPinia } from 'pinia'
import router from '../router'
import vuetify from './vuetify'
import { createApiPlugin } from './api'

export default {
  install(app: App) {
    app.use(createPinia()).use(router).use(vuetify).use(createApiPlugin())
  }
}
