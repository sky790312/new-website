import VueRouter from 'vue-router'

// import Home from '@/pages/Home'
// import Entry from '@/pages/Entry'
// import Profile from '@/pages/Profile'
// import Skill from '@/pages/Skill'
// import Projects from '@/pages/Projects'

const Home = () => import('@/pages/Home.vue')
// const Entry = () => import('@/pages/Entry.vue')
const Profile = () => import('@/pages/Profile.vue')
const Skill = () => import('@/pages/Skill.vue')
const Projects = () => import('@/pages/Projects.vue')

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
