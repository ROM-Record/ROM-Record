import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameList from '../views/GameView.vue'
import Records from '../components/Records.vue';
import ViewGames from '../components/ViewGames.vue';
import Backlog from '../components/Backlog.vue';
import EnterGames from '../components/EnterGame.vue';
import Achievement from '../components/Achievements.vue';
import Status from '../components/Status.vue';


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
      path: '/Dashboard',
      name: 'Dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Dashboard.vue'),
      

    },
    {
      path: '/results/:query',
      name: 'Search Results',
      component: () => import('../views/ResultsPage.vue')
    },
    {
      path: '/Signup',
      name: 'Signup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Signup.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue')
    },
    {
      path: '/DatabaseView',
      name: 'DatabaseView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DatabaseView.vue'),
      

     
    },
    {
      path: '/EnterGames',
      name: 'EnterGames',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: EnterGames,
      

     
    },
    {
      path: '/Records',
      name: 'Records',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Records,
      

     
    },
    {
      path: '/Backlog',
      name: 'Backlog',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Backlog,
      

     
    },
    {
      path: '/ViewGames',
      name: 'ViewGames',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ViewGames,
      

     
    },
    {
      path: '/Achievement',
      name: 'Achievement',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Achievement,
      

     
    },
    {
      path: '/Status',
      name: 'Status',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Status,
      

     
    }
  ]
})

export default router;
