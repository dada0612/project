import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/map',
    children: [
      {
        path: 'map',
        name: 'Map',
        component: () => import('../views/Map/index.vue')
      }
    ]
  },
  // {
  //   path: '/map',
  //   name: 'Map',
  //   component: () => import('../views/Map/index.vue')
  // },
  {
    path: '/404',
    component: () => import('../views/Error/index.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

export default router
