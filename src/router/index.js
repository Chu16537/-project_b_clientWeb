import { createRouter, createWebHistory } from 'vue-router'

import login from '@/views/login'
import home from '@/views/home'
import member from '@/views/member'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/member',
        name: 'member',
        component: member
    },
    { // 路徑不存在 到這裡
        path: '/:pathMatch(.*)*',
        redirect: '/login'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
