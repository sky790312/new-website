<template>
  <div
    id="helper"
    :class="{'active': helper.isActive}">
    <i-speech-bubble
      v-if="shouldShowSpeechBubble"
      :text="currentSpeechBubbleText"
      :disabledHover="true"
      @onMouseEnter="handleSpeechBubbleHover(true)"
      @onMouseLeave="handleSpeechBubbleHover(false)">
    </i-speech-bubble>
    <i-rotate-in-menus
      :class="['helper-menu', {'to-left': shouldShowAboutWebsite}, {'to-right': shouldShowMoreme}]"
      :isActive="helper.isActive"
      :useI18n="true"
      :menus="helper.menus"
      @onIRotateInMenusClick="handleHelperMenusClick">
      <i-head-boy
        :class="['helper-major', {'speeching': shouldShowSpeechBubble}]"
        :isActive="helper.isActive"
        @onIHeadBoyClick="handleHelperMajorClick">
      </i-head-boy>
    </i-rotate-in-menus>
    <transition
      name="about-website-slide">
      <about-website
        v-show="shouldShowAboutWebsite"
        @closeMenuContainer="closeMenuContainer">
      </about-website>
    </transition>
    <transition
      name="moreme-slide">
      <moreme
        v-show="shouldShowMoreme"
        @closeMenuContainer="closeMenuContainer">
      </moreme>
    </transition>
    <transition
      name="contact-info-slide">
      <contact-info
        v-show="helper.isActive">
      </contact-info>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

const ISpeechBubble = () => import('@/components/ISpeechBubble')
const IHeadBoy = () => import('@/components/IHeadBoy')
const IRotateInMenus = () => import('@/components/IRotateInMenus')
const AboutWebsite = () => import('@/views/AppCommon/Helper/AboutWebsite')
const Moreme = () => import('@/views/AppCommon/Helper/Moreme')
const ContactInfo = () => import('@/views/AppCommon/Helper/ContactInfo')
import {
  MENUS
} from '@/views/AppCommon/Helper/data'

export default {
  name: 'Helper',

  components: {
    ISpeechBubble,
    IHeadBoy,
    IRotateInMenus,
    AboutWebsite,
    Moreme,
    ContactInfo
  },

  data () {
    return {
      helper: {
        isActive: false,
        menus: MENUS
      }
    }
  },

  watch: {
    '$route.name' (newVal, val) {
      this.helper.isActive = false
      this.helper.menus.map(helperMenu => (helperMenu.isActive = false))
    },

    '$route.hash' (newVal, val) {
      this.helper.menus.map(helperMenu => (helperMenu.isActive = false))
      if (newVal) {
        const currentRoute = newVal.slice(1)
        const foundMenu = this.helper.menus.find(helperMenu => helperMenu.name === currentRoute)
        foundMenu.isActive = true
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
    },

    shouldShowAboutWebsite () {
      const aboutWebsiteMenu = this.helper.menus.find(helperMenu => helperMenu.name === 'aboutWebsite')
      return aboutWebsiteMenu.isActive
    },

    shouldShowMoreme () {
      const moremeMenu = this.helper.menus.find(helperMenu => helperMenu.name === 'moreme')
      return moremeMenu.isActive
    }
  },

  methods: {
    ...mapActions([
      'setShouldShowSpeechBubble'
    ]),

    handleHelperMajorClick () {
      this.helper.isActive = !this.helper.isActive
      this.helper.menus.map(helperMenu => (helperMenu.isActive = false))
    },

    handleHelperMenusClick (menu) {
      const menus = {
        aboutWebsite: () => { this.showMenuContainer('aboutWebsite') },
        oldWebsite: () => { this.handleOldwebsiteMenu() },
        messageBoard: () => {},
        moreme: () => { this.showMenuContainer('moreme') }
      }
      return menus[menu.name]()
    },

    handleSpeechBubbleHover (shouldShowSpeechBubble) {
      this.setShouldShowSpeechBubble(shouldShowSpeechBubble)
    },

    handleOldwebsiteMenu () {
      window.open('https://sky790312.herokuapp.com')
    },

    showMenuContainer (menu) {
      this.helper.menus.map(helperMenu => (helperMenu.isActive = false))
      const foundMenu = this.helper.menus.find(helperMenu => helperMenu.name === menu)
      const currentRoute = this.$route.hash.slice(1)
      const hash = currentRoute === foundMenu.name ? '' : foundMenu.name
      const page = { hash }
      this.$router.push(page)
      foundMenu.isActive = !foundMenu.isActive
    },

    closeMenuContainer (menu) {
      const foundMenu = this.helper.menus.find(helperMenu => helperMenu.name === menu)
      foundMenu.isActive = false
      const page = { hash: '' }
      this.$router.push(page)
    }
  }
}
</script>

<style lang="stylus" scoped>
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
    cursor: pointer
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
    position: relative
    transition: all 1s

    &.to-left, &.to-right {
      width: 50%
      height: 100%
      @extend .flex-center
    }

    &.to-left {
      margin-left: 0

      @media screen and (min-width: $mobile-break-point) {
        margin-left: 50%
      }
    }

    &.to-right {
      margin-right: 0

      @media screen and (min-width: $mobile-break-point) {
        margin-right: 50%
      }
    }
  }

  .contact-info-slide-enter-active {
    transition: all 1s ease
  }

  .contact-info-slide-enter, .contact-info-slide-leave-to {
    opacity: 0
    transform: translateY(50px)
  }

  .about-website-slide-enter-active, .about-website-slide-leave-active  {
    transition: all 1s ease
  }

  .about-website-slide-enter, .about-website-slide-leave-to {
    opacity: 0
    left: -100%

    @media screen and (min-width: $mobile-break-point) {
      left: -50%
    }
  }

  .moreme-slide-enter-active, .moreme-slide-leave-active  {
    transition: all 1s ease
  }

  .moreme-slide-enter, .moreme-slide-leave-to {
    opacity: 0
    right: -100%

    @media screen and (min-width: $mobile-break-point) {
      right: -50%
    }
  }
}

</style>
