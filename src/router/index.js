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
}, {
  path: '/about',
  name: 'about',
  component: About
}, {
  path: '/skills',
  name: 'skills',
  component: Skills
}, {
  path: '/experience',
  name: 'experience',
  component: Experience
}, {
  path: '/projects',
  name: 'projects',
  component: Projects
}, {
  path: '*',
  redirect: '/'
}]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// router.replace({ name: 'home' })
// router.replace('/')

export default router
