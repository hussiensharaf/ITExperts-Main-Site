
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Font Awesome setup for Vuetify 3

import { aliases, fa } from 'vuetify/iconsets/fa-svg'
import { mdi } from 'vuetify/iconsets/mdi'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import 'remixicon/fonts/remixicon.css'

library.add(fas)

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    variations: {
      colors: ['surface', 'background', 'primary', 'secondary', 'muted', 'success', 'info', 'alert', 'danger', 'dark-background'],
      lighten: 8,
      darken: 8,
    },
    defaultTheme: 'light',
    themes: {

      light: {
        variables: {
        },
        dark: false,
        colors: {

          background: '#F4F5F8',
          'dark-background': '#00111c',
          surface: '#F4F5F8',
          primary: '#2176ff',
          secondary: '#fe7f2d',
          border: '#e3e8d8',
        },
      }
    }
  }
})

// Register FontAwesome component globally (do this in main.js instead)
// app.component('font-awesome-icon', FontAwesomeIcon)