import Router from 'vue-router'

import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'

const routes = [
  {
    path: '/page1',
    name: 'page1',
    component: Page1
  }, {
    path: '/page2',
    name: 'page2',
    component: Page2
  }
]

export default new Router({ routes })
