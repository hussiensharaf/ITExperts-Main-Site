import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify.ts'
import "./components/global/mixins/Mixin.js"
import './assets/main.scss'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const app = createApp(App)
const pinia = createPinia()

// Register Components
app.component('font-awesome-icon', FontAwesomeIcon)

// Register plugins
app.use(router)
app.use(vuetify)

app.use(pinia)



// Mount the app
app.mount('#app')

