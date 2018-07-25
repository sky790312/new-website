import {
  requiredParam
} from '@/utils'

const types = {
  SET_SPEECH_BUBBLE_TITLE: 'SET_SPEECH_BUBBLE_TITLE',
  SET_SHOULD_SHOW_SPEECH_BUBBLE: 'SET_SHOULD_SHOW_SPEECH_BUBBLE'
}

const state = {
  speechBubbleTitle: '',
  shouldShowSpeechBubble: false
}

const getters = {
  speechBubbleTitle: state => state.speechBubbleTitle,
  shouldShowSpeechBubble: state => state.shouldShowSpeechBubble
}

const actions = {
  setSpeechBubbleTitle ({ commit }, speechBubbleTitle = '') {
    commit(types.SET_SPEECH_BUBBLE_TITLE, speechBubbleTitle)
  },

  setShouldShowSpeechBubble ({ commit }, shouldShowSpeechBubble = requiredParam('shouldShowSpeechBubble')) {
    commit(types.SET_SHOULD_SHOW_SPEECH_BUBBLE, shouldShowSpeechBubble)
  }
}

const mutations = {
  [types.SET_SPEECH_BUBBLE_TITLE] (state, speechBubbleTitle) {
    state.speechBubbleTitle = speechBubbleTitle
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
