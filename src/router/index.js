import Router from 'vue-router'

import Home from '@/pages/Home'
// import Entry from '@/pages/Entry'
import Profile from '@/pages/Profile'
import Skill from '@/pages/Skill'
import Projects from '@/pages/Projects'

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

export default new Router({ routes })
