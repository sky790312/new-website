import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import VueParticles from 'vue-particles'

import { i18n } from '@/setup/i18n-setup'
import router from '@/router'
import store from '@/store'

import App from '@/App'
import globalMixinMethods from '@/mixins/globalMixinMethods'

Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(VueI18n)
// Vue.use(VueParticles)

Vue.http.interceptors.push((request, next) => {
  console.log('sending request: ', request)
  next(response => {
    console.log('get response: ', response)
  })
})

Vue.mixin({
  methods: globalMixinMethods
})

Vue.config.productionTip = false

/* eslint-disable */
export const app = new Vue({
  el: '#app',
  store,
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
