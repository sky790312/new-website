import Router from 'vue-router'

import Home from '@/pages/Home'
// import Entry from '@/pages/Entry'
import About from '@/pages/About'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
    // meta: { shouldShowMenu: false }
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: Home
  //   // meta: { shouldShowMenu: true }
  // },
  {
    path: '/about',
    name: 'about',
    component: About
    // meta: { shouldShowMenu: true }
  }
]

export default new Router({ routes })
