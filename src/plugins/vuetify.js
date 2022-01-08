
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faVuejs } from '@fortawesome/free-brands-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faVuejs)

Vue.use(Vuetify)
export default new Vuetify({
    icons: {
      iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg' 
    },
  })