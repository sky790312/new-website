import {
  LANGUAGES,
  DEFAULT_LANGUAGE,
  FALLBACK_LANGUAGE
} from '@/locales/setting'

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const files = require.context('.', true, /\.js$/)
const locales = {}

files.keys().forEach(fileName => {
  if (!fileName.includes('index.js')) {
    return
  }

  const moduleName = fileName.replace(/(\.\/|\.js)/g, '')
  const foundLanguage = LANGUAGES.find(language => moduleName.includes(language))

  if (foundLanguage) {
    locales[foundLanguage] = files(fileName).default
  }
})
// console.log('locales: ', locales)

const i18n = new VueI18n({
  locale: DEFAULT_LANGUAGE,
  fallbackLocale: FALLBACK_LANGUAGE,
  messages: locales,
  silentTranslationWarn: true
})

export default i18n
