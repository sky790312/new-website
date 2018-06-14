import VueRouter from 'vue-router'

// import Home from '@/views/Home'
// import Entry from '@/views/Entry'
// import Profile from '@/views/Profile'
// import Skill from '@/views/Skill'
// import Projects from '@/views/Projects'

const asyncLoad = (view) => {
  return () => import(`@/views/${view}.vue`)
}

const Home = () => asyncLoad('Home')
// const Entry = () => asyncLoad('Home')
const Profile = () => asyncLoad('Profile')
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
