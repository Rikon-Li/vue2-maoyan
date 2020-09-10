import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../pages/Film/Film.vue'
// import Cinema from '../pages/Cinema.vue'
// import Login from '../pages/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/film',
    name: 'Film',
    component: Film,
    children: [
      {
        path: '/film/now-hot',
        name: 'Now-hot',
        component: () => import(/* webpackChunkName: "now-hot" */ '../pages/Film/components/Now-hot.vue')
      },
      {
        path: '/film/comming-hot',
        name: 'Comming-hot',
        component: () => import(/* webpackChunkName: "comming-hot" */ '../pages/Film/components/Comming-hot.vue')
      }
    ]
  },
  {
    path: '/cinema',
    name: 'Cinema',
    component: () => import(/* webpackChunkName: "cinema" */ '../pages/Cinema/Cinema.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../pages/Login/Login.vue')
  },
  {
    path: '/',
    redirect: '/film',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
