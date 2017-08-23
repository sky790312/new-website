import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import others from './modules/others'

Vue.use(Vuex)

const state = {

}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    others
  },
  strict: true
})

export default store
