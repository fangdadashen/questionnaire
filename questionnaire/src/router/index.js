import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:() => import('@/pages/home/home.vue')
  },
  {
    path: '/create/:id',
    name: 'create',
    component: () => import('@/pages/create/create.vue')
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('@/pages/user/user.vue')
  },
  {
    path: '/totalquantity/:id',
    name: 'totalquantity',
    component: () => import('@/pages/totalquantity/totalquantity.vue')
  }
  
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
