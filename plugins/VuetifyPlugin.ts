import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark',
    },
  })
  app.vueApp.use(vuetify)
})
