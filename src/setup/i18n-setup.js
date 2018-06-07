import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locales from '@/locales'
import axios from 'axios'

Vue.use(VueI18n)

const alreadyLoadedLanguages = ['en'] // default language

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: locales,
  silentTranslationWarn: true
})

const setI18nLanguage = language => {
  i18n.locale = language
  axios.defaults.headers.common['Accept-Language'] = language
  document.documentElement.language = language
  return language
}

export const loadLanguageAsync = language => {
  if (i18n.locale !== language) {
    if (!alreadyLoadedLanguages.includes(language)) {
      return import(`@/locales/${language}`).then(locales => {
        i18n.setLocaleMessage(language, locales.default)
        alreadyLoadedLanguages.push(language)
        return setI18nLanguage(language)
      })
    }
    return Promise.resolve(setI18nLanguage(language))
  }
  return Promise.resolve(language)
}
