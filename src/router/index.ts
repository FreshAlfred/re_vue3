import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/page/Home.vue'
import About from '@/page/About.vue'
import News from '@/page/News.vue'
import Detail from '@/page/Detail.vue'

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
            component: News,
            children: [
                {
                    path: 'detail/:id/:title/:content',
                    name: 'detail',
                    component: Detail,
                    props(route) {
                        return route.params
                    }
                }
            ]
        },
        {
            path: '/About',
            name: 'about',
            component: About
        }
    ]
})

export default router