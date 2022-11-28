import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

//import 'windi.css'
//import 'windi.css'

// import 'bootstrap/dist/css/bootstrap.css'
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
// createApp(app).use(bootstrap).mount('#app')

import App from './app.vue'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
  .use(router)

Object.values(import.meta.globEager('./modules/*.js')).map(i => i.install?.({ app }))

app.mount('#app')

