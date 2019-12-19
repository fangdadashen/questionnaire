import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home.vue'
import Create from '@/pages/create/create.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
