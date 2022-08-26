import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from './router/router'
import components from '@/components/UI'

import '@/styles/main.scss'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.use(store)
    .use(router)
    .mount('#app')
