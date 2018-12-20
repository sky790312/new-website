const types = {
  SET_IS_ENTRY_VIEW: 'SET_IS_ENTRY_VIEW'
}

const state = {
  isEntryView: true
}

const getters = {
  isEntryView: state => state.isEntryView
}

const actions = {
  async setIsEntryView ({ commit }, isEntryView) {
    commit(types.SET_IS_ENTRY_VIEW, isEntryView)
  }
}

const mutations = {
  SET_IS_ENTRY_VIEW (state, isEntryView) {
    state.isEntryView = isEntryView
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
