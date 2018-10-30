import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import(`@/views/Home`)
// const Entry = () => import(`@/views/Profile`)
const About = () => import(`@/views/About`)
const Experience = () => import(`@/views/Experience`)
const Skills = () => import(`@/views/Skills`)
const Projects = () => import(`@/views/Projects`)

const routes = [{
  path: '/',
  name: 'home',
  component: Home
  // meta: { shouldShowMenu: false }
  // }, {
  //   path: '/home',
  //   name: 'home',
  //   component: Home
  //   // meta: { shouldShowMenu: true }
}, {
  path: '/about',
  name: 'about',
  component: About
  // meta: { shouldShowMenu: true }
}, {
  path: '/skills',
  name: 'skills',
  component: Skills
  // meta: { shouldShowMenu: true }
}, {
  path: '/experience',
  name: 'experience',
  component: Experience
  // meta: { shouldShowMenu: true }
}, {
  path: '/projects',
  name: 'projects',
  component: Projects
  // meta: { shouldShowMenu: true }
}]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

export default router
