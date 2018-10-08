import Vue from 'vue'
import Vuex from 'vuex'
import {
  camelize
} from '@/utils'

Vue.use(Vuex)

const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().forEach(fileName => {
  if (fileName === './index.js') {
    return
  }

  const moduleName = camelize(
    fileName.replace(/(\.\/|\.js)/g, '')
  )
  modules[moduleName] = files(fileName).default
})

export const store = new Vuex.Store({
  modules,
  strict: true
})

export default store
