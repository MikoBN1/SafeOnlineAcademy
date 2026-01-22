import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TopicView from '../views/TopicView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/topic/:id',
            name: 'topic',
            component: TopicView,
        },
        {
            path: '/training/phishing',
            name: 'phishing-training',
            component: () => import('../views/PhishingTrainingView.vue')
        },
    ],
})

export default router
