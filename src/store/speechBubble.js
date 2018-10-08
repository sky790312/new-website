import {
  requiredParam
} from '@/utils'

const types = {
  SET_SPEECH_BUBBLE: 'SET_SPEECH_BUBBLE',
  SET_SHOULD_SHOW_SPEECH_BUBBLE: 'SET_SHOULD_SHOW_SPEECH_BUBBLE'
}

const state = {
  speechBubble: {
    type: '',
    text: ''
  },
  shouldShowSpeechBubble: false
}

const getters = {
  speechBubble: state => state.speechBubble,
  shouldShowSpeechBubble: state => state.shouldShowSpeechBubble
}

const actions = {
  setSpeechBubble ({ commit }, speechBubble = { type: '', text: '' }) {
    commit(types.SET_SPEECH_BUBBLE, speechBubble)
  },

  setShouldShowSpeechBubble ({ commit }, shouldShowSpeechBubble = requiredParam('shouldShowSpeechBubble')) {
    commit(types.SET_SHOULD_SHOW_SPEECH_BUBBLE, shouldShowSpeechBubble)
  }
}

const mutations = {
  [types.SET_SPEECH_BUBBLE] (state, speechBubble) {
    state.speechBubble = speechBubble
  },

  [types.SET_SHOULD_SHOW_SPEECH_BUBBLE] (state, shouldShowSpeechBubble) {
    state.shouldShowSpeechBubble = shouldShowSpeechBubble
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
