import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/components/About'
import Tasks from '@/components/Tasks'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: About
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
