import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueI18n from 'vue-i18n'
// import VueParticles from 'vue-particles'

import locales from './locales'
import router from './router'
import store from './store'

import App from './App'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueI18n)
// Vue.use(VueParticles)

Vue.http.interceptors.push((request, next) => {
  console.log('sending request: ', request)
  next(response => {
    console.log('response: ', response)
  })
})

Vue.config.productionTip = false
const lang = 'en'

const i18n = new VueI18n({
  locale: lang,
  messages: locales,
  silentTranslationWarn: true
})

/* eslint-disable */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
