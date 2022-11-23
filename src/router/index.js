import { createRouter, createWebHistory } from 'vue-router'
import Сurrency from '../views/Сurrency.vue'

const routes = [
  {
    path: '/',
    name: 'currency',
    component: Сurrency
  },
  {
    path: '/converter',
    name: 'converter',
    component: () => import('../views/Converter.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
