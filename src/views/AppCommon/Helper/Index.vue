<template>
  <div
    id="helper"
    :class="{'active': helper.isActive}">
    <i-speech-bubble
      v-if="shouldShowSpeechBubble"
      :text="currentSpeechBubbleText"
      :disabledHover="true"
      @onMouseEnter="handleSpeechBubbleEnter"
      @onMouseLeave="handleSpeechBubbleLeave">
    </i-speech-bubble>
    <i-rotate-in-menus
      class="helper-menu"
      :isActive="helper.isActive"
      :useI18n="true"
      :menus="helper.menus"
      @onIRotateInMenusClick="handleHelperMenusClick">
      <i-head-boy
        class="helper-major"
        :isActive="helper.isActive"
        @onIHeadBoyClick="handleHelperMajorClick"
        :class="{'speeching': shouldShowSpeechBubble}">
      </i-head-boy>
    </i-rotate-in-menus>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

const ISpeechBubble = () => import('@/components/ISpeechBubble')
const IHeadBoy = () => import('@/components/IHeadBoy')
const IRotateInMenus = () => import('@/components/IRotateInMenus')
import {
  MENUS
} from '@/views/AppCommon/Helper/data'

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
        menus: MENUS
      }
    }
  },

  computed: {
    ...mapGetters([
      'speechBubble',
      'shouldShowSpeechBubble'
    ]),

    currentSpeechBubbleText () {
      return this.$t(`helper.mermer.${this.speechBubble.type}.${this.speechBubble.text}`)
    }
  },

  methods: {
    ...mapActions([
      'setShouldShowSpeechBubble'
    ]),

    handleHelperMajorClick () {
      this.helper.isActive = !this.helper.isActive
    },

    handleHelperMenusClick (menu) {
      const menus = {
        aboutWebsite: () => {},
        oldWebsite: () => { this.handleOldwebsiteMenu() },
        messageBoard: () => {}
      }
      return menus[menu.name]()
    },

    handleSpeechBubbleEnter () {
      this.setShouldShowSpeechBubble(true)
    },

    handleSpeechBubbleLeave () {
      this.setShouldShowSpeechBubble(false)
    },

    handleOldwebsiteMenu () {
      window.open('https://sky790312.herokuapp.com')
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
  right: 40px
  z-index: 1

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

    .helper-major {
      &:hover, &.speeching {
        margin-bottom: 0
      }
    }
  }

  .helper-major {
    transition: all .2s ease

    &::after {
      content: 'Click me back!'
      position: absolute
      top: 105px
      left: -15px
      width: 130px
      color: $light-gray
      font-size: 18px
    }

    &:hover, &.speeching {
      margin-bottom: 5px
    }
  }

  .helper-menu {
    cursor: pointer
  }
}

</style>
