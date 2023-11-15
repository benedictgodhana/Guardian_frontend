import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'



const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true, // Set to true for a dark theme
    themes: {
      light: {
        primary: '#007bff', // Your primary color
        secondary: '#424242', // Your secondary color
        accent: '#82B1FF', // Your accent color
      },
    },
  },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')
