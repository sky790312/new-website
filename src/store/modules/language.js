import { loadLanguageAsync } from '@/setup/i18n-setup'

const state = {
  language: 'en'
}

const getters = {
  language: state => state.language
}

const actions = {
  async setLanguage ({ commit }, language = 'en') {
    await loadLanguageAsync(language)
    commit('SET_LANGUAGE', language)
    return language
  }
}

const mutations = {
  SET_LANGUAGE (state, language = 'en') {
    state.language = language
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
