<template>
  <div
    id="helper"
    :class="{'active': helper.isActive, 'speeching': shouldShowSpeechBubble}">
    <i-speech-bubble
      v-show="shouldShowSpeechBubble"
      :text="currentSpeechBubbleTitle"
      :disabledHover="true"
      @onMouseEnter="onSpeechBubbleEnter"
      @onMouseLeave="onSpeechBubbleLeave">
    </i-speech-bubble>
    <i-rotate-in-menus
      class="helper-menu"
      :isActive="helper.isActive"
      :menus="helper.menus"
      @onIRotateInMenusClick="handleHelperMenusClick">
      <i-head-boy
        class="helper-major"
        :isActive="helper.isActive"
        @onIHeadBoyClick="handleHelperMajorClick">
      </i-head-boy>
    </i-rotate-in-menus>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

const ISpeechBubble = () => import('@/components/ISpeechBubble')
const IHeadBoy = () => import('@/components/IHeadBoy')
const IRotateInMenus = () => import('@/components/IRotateInMenus')

export default {
  name: 'Helper',

  components: {
    ISpeechBubble,
    IHeadBoy,
    IRotateInMenus
  },

  data () {
    return {
      helper: {
        isActive: false,
        menus: [{
          name: 1,
          text: '1',
          status: 'completed'
        }, {
          name: 2,
          text: '2',
          status: 'completed'
        }, {
          name: 3,
          text: '3',
          status: 'completed'
        }, {
          name: 4,
          text: '4',
          status: 'completed'
        }, {
          name: 5,
          text: '5',
          status: 'pending'
        }]
      }
    }
  },

  computed: {
    ...mapGetters([
      'speechBubbleTitle',
      'shouldShowSpeechBubble'
    ]),

    currentSpeechBubbleTitle () {
      return this.$t(`mermer.${this.speechBubbleTitle}`)
    }
  },

  methods: {
    ...mapActions([
      'setShouldShowSpeechBubble'
    ]),

    handleHelperMajorClick () {
      this.helper.isActive = true
    },

    handleHelperMenusClick (menu) {
      console.log('in handleHelperMenusClick', menu)
    },

    onSpeechBubbleEnter () {
      this.setShouldShowSpeechBubble(true)
    },

    onSpeechBubbleLeave () {
      this.setShouldShowSpeechBubble(false)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styl/variables'
@import '~styl/extends'

#helper {
  position: fixed
  bottom: -30px
  right: 20px
  transition: all .2s ease

  &:hover, &.speeching {
    margin-bottom: 5px
  }

  &.active {
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    display: flex
    align-items: center
    justify-content: center
    background-color: rgba($black, .85)
  }

  .helper-menu {
    cursor: pointer
  }
}

</style>
