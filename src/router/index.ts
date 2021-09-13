import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import ContactUs from '../components/ContactUs.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/ContactUs',
    name: 'Contact Us',
    component: ContactUs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
