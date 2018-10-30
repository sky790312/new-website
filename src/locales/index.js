import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const files = require.context('.', false, /\.js$/)
const locales = {}

files.keys().forEach(fileName => {
  if (fileName === './index.js') {
    return
  }

  const moduleName = fileName.replace(/(\.\/|\.js)/g, '')
  locales[moduleName] = files(fileName).default
})

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: locales,
  silentTranslationWarn: true
})

export default i18n
