import axios from 'axios'
import i18n from '@/locales'
import {
  DEFAULT_LANGUAGE
} from '@/locales/setting'

const alreadyLoadedLanguages = [DEFAULT_LANGUAGE]

const setI18nLanguage = language => {
  i18n.locale = language
  axios.defaults.headers.common['Accept-Language'] = language
  document.documentElement.language = language
  return language
}

const loadLanguageAsync = language => {
  if (i18n.locale !== language) {
    if (!alreadyLoadedLanguages.includes(language)) {
      return import(`@/locales/${language}/index.js`).then(locales => {
        i18n.setLocaleMessage(language, locales.default)
        alreadyLoadedLanguages.push(language)
        return setI18nLanguage(language)
      })
    }
    return Promise.resolve(setI18nLanguage(language))
  }
  return Promise.resolve(language)
}

const types = {
  SET_LANGUAGE: 'SET_LANGUAGE'
}

const state = {
  language: DEFAULT_LANGUAGE
}

const getters = {
  language: state => state.language
}

const actions = {
  async setLanguage ({ commit }, language = DEFAULT_LANGUAGE) {
    await loadLanguageAsync(language)
    commit(types.SET_LANGUAGE, language)
    return language
  }
}

const mutations = {
  [types.SET_LANGUAGE] (state, language = DEFAULT_LANGUAGE) {
    state.language = language
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
