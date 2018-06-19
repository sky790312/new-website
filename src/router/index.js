import VueRouter from 'vue-router'

const asyncLoad = (view) => {
  return import(`@/views/${view}.vue`)
}

const Home = () => asyncLoad('Home')
// const Entry = () => asyncLoad('Entry')
const Profile = () => asyncLoad('Profile')
const Experience = () => asyncLoad('Experience')
const Skill = () => asyncLoad('Skill')
const Projects = () => asyncLoad('Projects')

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
  path: '/profile',
  name: 'profile',
  component: Profile
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
