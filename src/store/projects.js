const types = {
  SET_FILTERS: 'SET_FILTERS',
  SET_FILTER_STATE: 'SET_FILTER_STATE'
}

const state = {
  filters: {
    company: {},
    skills: {}
  }
}

const getters = {
  filters: state => state.filters
}

const actions = {
  setFilters ({ commit }, filters = { company: {}, skills: {} }) {
    commit(types.SET_FILTERS, filters)
  },

  setFilterState ({ commit }, filter = {type: '', item: '', isActive: false}) {
    commit(types.SET_FILTER_STATE, filter)
  }
}

const mutations = {
  [types.SET_FILTERS] (state, filters) {
    state.filters = filters
  },

  [types.SET_FILTER_STATE] (state, filter) {
    if (filter.type === 'skills') {
      state.filters['skills']['react'].isActive = true
    }
    // (filter.type === 'skills')
    //   ? state.filters[filter.type][filter.item].isActive = !state.filters[filter.type][filter.item].isActive
    //   : ''
    // const foundFilter = state.filters.find(filter => filter === newFilter)
    // foundFilter.isActive = !foundFilter.isActive
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
