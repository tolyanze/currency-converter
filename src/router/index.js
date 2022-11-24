import { createRouter, createWebHistory } from 'vue-router'
import Сurrency from '../views/Сurrency.vue'

const routes = [
  {
    path: '/',
    name: 'Currency',
    component: Сurrency
  },
  {
    path: '/converter',
    name: 'Converter',
    component: () => import('../views/Converter.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
