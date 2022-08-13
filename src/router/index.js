import Vue from 'vue'
import VueRouter from 'vue-router'
import ScreenHome from '@/views/screenHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ScreenHome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
