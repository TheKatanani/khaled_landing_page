/*eslint-disable*/

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
     path: "/",
      name: "land",
      component: () => import("../views/LandingShiFlow.vue"),
      children:[
        {
          path:"",
          name:"realhome",
          component: () => import("../components/LandingHome.vue"),
        },
       
      ]
    },
    {
      path: "/signin",
      name: "/enboarding",
      component: () => import("../views/Enboarding.vue"),
      children: [
    {
      path: "",
      name: "Signin",
      component: () => import("../views/Signin.vue")
    },
    {
      path: "signup",
      name: "Signup",
      component: () => import("../views/Signup.vue")
    }
       ]

    },


  ]
})



export default router;

