
import Landing from '../views/Landing.vue'
import { createRouter, createWebHistory } from 'vue-router'
import restrictRoutes from '@/middleware/middleware'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Landing
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(restrictRoutes)

export default router
