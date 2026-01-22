import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'safeOnlineTheme',
    themes: {
      safeOnlineTheme: {
        dark: false,
        colors: {
          primary: '#1A237E', // Deep Indigo
          secondary: '#00BFA5', // Teal Accent
          accent: '#FFAB00', // Amber Accent
          error: '#D32F2F',
          info: '#1976D2',
          success: '#388E3C',
          warning: '#FFA000',
          background: '#F5F7FA', // Light cool grey
          surface: '#FFFFFF',
        },
      },
    },
  },
})
