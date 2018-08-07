import VueRouter from 'vue-router'

const Home = () => import(`@/views/Home`)
// const Entry = () => import(`@/views/Profile`)
const About = () => import(`@/views/About`)
const Experience = () => import(`@/views/Experience`)
const Skill = () => import(`@/views/Skill`)
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
  path: '/skill',
  name: 'skill',
  component: Skill
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
