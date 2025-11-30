/*eslint-disable*/

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Landing Page Wrapper
    {
      path: '/',
      name: 'Landing',
      component: () => import('../views/LandingShiFlow.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../components/LandingHome.vue')
        }
      ]
    },

    // LOGIN (Standalone page)
    {
      path: '/signin',
      name: 'Signin',
      component: () => import('../views/Signin.vue')
    },

    // SIGNUP (Standalone page)
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/Signup.vue')
    }
  ]
})

export default router
