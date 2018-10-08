import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import modules from '@/store/modules'

export const store = new Vuex.Store({
  modules,
  strict: true
})

export default store
