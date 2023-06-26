import { createRouter, createWebHistory } from 'vue-router'

import login from '@/views/login'
import home from '@/views/home'
import member from '@/views/member'
import game from '@/views/game'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            hideTopMenu: true,
            hidStartButton: true
        }
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
    {
        path: '/game',
        name: 'game',
        component: game
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
