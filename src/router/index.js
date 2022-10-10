import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import index from '../views/index.vue'
import register from '../views/register.vue'
import cart from '../views/cart.vue'
import schedule from '../views/schedule.vue'


const routes = [
    {
      path: '/index',
      name: 'index',
      component: index,
    },
    {
      path: '/index/:id',
      name: '/indexdetails',
      component: indexdetails,
    },
    {
      path: '/cart',
      name: '/cart',
      component: cart,
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
