import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/Login.vue'
import CreateAcc from '../views/auth/CreateAccount.vue'
import Signout from '../views/auth/Logout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/auth",
      name: "login",
      component: Login,
    },
    {
      path: "/create-account",
      name: "create account",
      component: CreateAcc,
    },
    {
      path: "/signout",
      name: "signout",
      component: Signout,
    }
  ]
})

export default router
