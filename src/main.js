import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import vuex from './plugins/vuex'
import router from "./plugins/vue-router"
import loading from "./plugins/app-loading"
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(vuex)
  .use(vuetify)
  .use(loading)
  .mount('#app')
