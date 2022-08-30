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

app
    .use(store)
    .use(router)
    .directive('click-outside', {
        bind () {
            this.event = event => this.vm.$emit(this.expression, event)
            this.el.addEventListener('click', this.stopProp)
            document.body.addEventListener('click', this.event)
        },
        unbind() {
            this.el.removeEventListener('click', this.stopProp)
            document.body.removeEventListener('click', this.event)
        },

        stopProp(event) { event.stopPropagation() }
    })
    .mount('#app')
