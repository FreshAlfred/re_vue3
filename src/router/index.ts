import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/component/Home.vue'
import About from '@/component/About.vue'
import News from '@/component/News.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/News',
            name: 'news',
            component: News
        },
        {
            path: '/About',
            name: 'about',
            component: About
        }
    ]
})

export default router