import Home from '@/pages/Home'
import About from '@/pages/About'
import Archive from '@/pages/Archive'
import Login from '@/pages/Login'
import Registration from '@/pages/Registration'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/archive',
        component: Archive
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/registration',
        component: Registration
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})

export default router;