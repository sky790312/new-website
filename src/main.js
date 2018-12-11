import Vue from 'vue'

import i18n from '@/locales'
import router from '@/router'
import store from '@/store'

import App from '@/App'
import globalMixinMethods from '@/mixins/globalMixinMethods'

// Vue.http.interceptors.push((request, next) => {
//   console.log('sending request: ', request)
//   next(response => {
//     console.log('get response: ', response)
//   })
// })

Vue.mixin({
  methods: globalMixinMethods
})

// Vue.config.productionTip = false

let consoleText = `welcome to KevinHu's website!`
let consoleStyle = `font-size: 20px; background-color: red; font-weight: bold; color: white; text-shadow: 0 0 1em black, 0 0 1em black, 0 0 1em black, 0 0 1em black, 0 0 1em black; padding: 3px 5%; border: .1em solid rgba(0,0,0,.4); border-radius: 1em;`
console.log('%c' + consoleText, consoleStyle)

/* eslint-disable */
export const app = new Vue({
  el: '#app',
  store,
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
