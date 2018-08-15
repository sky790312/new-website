import Vue from 'vue'
import Vuex from 'vuex'

import language from '@/store/modules/language'
import speechBubble from '@/store/modules/speechBubble'
// import entryView from '@/store/modules/entryView'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    language,
    speechBubble
    // entryView
  },
  strict: true
})

export default store
