import { loadLanguageAsync } from '@/setup/i18n-setup'

const types = {
  SET_LANGUAGE: 'SET_LANGUAGE'
}

const state = {
  language: 'en'
}

const getters = {
  language: state => state.language
}

const actions = {
  async setLanguage ({ commit }, language = 'en') {
    await loadLanguageAsync(language)
    commit(types.SET_LANGUAGE, language)
    return language
  }
}

const mutations = {
  [types.SET_LANGUAGE] (state, language = 'en') {
    state.language = language
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
