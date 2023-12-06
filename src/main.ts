import './index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGtag from 'vue-gtag'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
if (import.meta.env.VITE_GA_ID && import.meta.env.VITE_GA_ID !== '') {   
    app.use(VueGtag, {
        appName: "Resume",
        pageTrackerScreenviewEnabled: true,
        config: { id: import.meta.env.VITE_GA_ID }
    })
}
app.mount('#app')
