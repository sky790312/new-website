import Vue from 'vue'
import Vuex from 'vuex'

// import * as getters from '@/store/getters'
// import * as actions from '@/store/actions'
// import * as mutations from '@/store/mutations'
// import others from '@/store/modules/others'
import language from '@/store/modules/language'
import speechBubble from '@/store/modules/speechBubble'

Vue.use(Vuex)

// const state = {
//
// }

const store = new Vuex.Store({
  // state,
  // getters,
  // actions,
  // mutations,
  modules: {
    language,
    speechBubble
    // others
  },
  strict: true
})

export default store
