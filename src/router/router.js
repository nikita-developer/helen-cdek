import Home from '@/pages/Home'
import About from '@/pages/About'
import Archive from '@/pages/Archive'
import Login from '@/pages/Login'
import GraphicsJob from '@/pages/GraphicsJob'
import GraphicsMoney from '@/pages/GraphicsMoney'
import store from '@/store/modules/auth'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About,
        meta: {
            auth: true
        },
    },
    {
        path: '/archive',
        component: Archive,
        meta: {
            edits: true,
            auth: true
        },
        children: [
            {
                path: '/archive/graphics-job',
                component: GraphicsJob,
            },
            {
                path: '/archive/graphics-money',
                component: GraphicsMoney,
            },
        ]
    },
    {
        path: '/login',
        component: Login,
        meta: {
            login: true
        }
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
    let edits = store.state.user.edits
    let isAuth = store.state.user.isAuth

    let routAuth = to.meta.auth
    let routEdits = to.meta.edits
    let routLogin = to.meta.login

    if(routEdits && !edits) {
        console.log(1);
        return next('/')
    }

    if(routLogin && isAuth) {
        console.log(2);
        return next('/')
    }

    if(routAuth && !isAuth) {
        console.log(3);
        return next('/')
    }

    return next()
})

export default router;