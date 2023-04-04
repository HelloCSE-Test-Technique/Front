import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:id',
      name: 'details',
      component: () => import("@/views/StarView.vue"),
    },
    {
      path: '/admin',
      name: 'CRUD',
      component: () => import("@/views/AdminView.vue"),
    }
  ]
})

export default router
