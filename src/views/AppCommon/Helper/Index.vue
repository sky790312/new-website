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
      <div
        v-show="shouldShowAboutWebsite"
        class="about-website-container">
        <a
          class="close"
          @click="closeAboutWebsite">
          x
        </a>
        <h1>
          {{ $t('helper.menu.aboutWebsite') }}
        </h1>
        <p
          class="about-website-desc">
          {{ $t('helper.aboutWebsite.desc') }}          
        </p>
        <img
          class="about-website-img"
          loop="infinite"
          :src="entryPageImageUrl">
        <h3>
          {{ $t('helper.aboutWebsite.conclusion') }}
          <i
            class="fa fa-3x fa-hand-peace-o">
          </i>
        </h3>
      </div>
    </transition>
    <transition
      name="moreme-slide">
      <div
        v-show="shouldShowMoreme"
        class="moreme-container">
        <a
          class="close"
          @click="closeMoreme">
          x
        </a>
        <h1>
          {{ $t('helper.menu.moreme') }}
        </h1>
        <div
          class="moreme-item">
          <div
            class="moreme-left">
            <h3>            
              {{ $t('helper.moreme.intro') }}
            </h3>
          </div>
          <div
            class="moreme-right">
            <img
              :src="working1ImageUrl">
          </div>
        </div>
        <div
          class="moreme-item">
          <div
            class="moreme-left">
            <img
              :src="working2ImageUrl">
          </div>
          <div
            class="moreme-right">
            {{ $t('helper.moreme.working') }}
          </div>
        </div>
        <div
          class="moreme-item">
          <div
            class="moreme-left">
            {{ $t('helper.moreme.basketball') }}
          </div>
          <div
            class="moreme-right">
            <img
              :src="extroverted1ImageUrl">
          </div>
        </div>
        <div
          class="moreme-item">
          <div
            class="moreme-left">
            <img
              :src="extroverted2ImageUrl">
          </div>
          <div
            class="moreme-right">
            {{ $t('helper.moreme.dance') }}
          </div>
        </div>
        <div
          class="moreme-item">
          <div
            class="moreme-left">
            {{ $t('helper.moreme.photo') }}
          </div>
          <div
            class="moreme-right">
            <img
              :src="introverted1ImageUrl">
          </div>
        </div>
        <div
          class="moreme-item">
          <div
            class="moreme-left">
            <img
              :src="introverted2ImageUrl">
          </div>
          <div
            class="moreme-right">
            {{ $t('helper.moreme.instrument') }}
          </div>
        </div>
        <div
          class="moreme-item">
          <div
            class="moreme-left">
            {{ $t('helper.moreme.family') }}
          </div>
          <div
            class="moreme-right">
            <img
              :src="family1ImageUrl">
          </div>
        </div>
      </div>
    </transition>
    <transition
      name="contact-info-slide">
      <div
        v-if="helper.isActive"
        class="contact-info-container">
        <div>
          <p>
            Online CV: 
            <a
              class="link"
              target="_blank"
              href="mailto:sky790312yks@gmail.com">
              Link
            </a>
          </p>
          <p>
            Email:
            <a
              class="link"
              target="_blank"
              href="https://sky790312.herokuapp.com/cv-english.pdf">
              sky790312yks@gmail.com
            </a>
          </p>
        </div>
      </div>
    </transition>
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
      },
      entryPageImageUrl: require('~assets/helper/entry-page.gif'),
      working1ImageUrl: require('~assets/helper/working-img1.jpg'),
      working2ImageUrl: require('~assets/helper/working-img2.jpg'),
      extroverted1ImageUrl: require('~assets/helper/extroverted-img1.jpg'),
      extroverted2ImageUrl: require('~assets/helper/extroverted-img2.jpg'),
      introverted1ImageUrl: require('~assets/helper/introverted-img1.jpg'),
      introverted2ImageUrl: require('~assets/helper/introverted-img2.jpg'),
      family1ImageUrl: require('~assets/helper/family-img1.jpg')
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
      // const foundMenu = this.helper.menus.find(helperMenu => helperMenu.name === menu.name)
      // foundMenu.isActive = !foundMenu.isActive
      const menus = {
        aboutWebsite: () => { this.handleAboutWebsiteMenu() },
        oldWebsite: () => { this.handleOldwebsiteMenu() },
        messageBoard: () => {},
        moreme: () => { this.handleMoremeMenu() }
      }
      return menus[menu.name]()
    },

    handleSpeechBubbleHover (shouldShowSpeechBubble) {
      this.setShouldShowSpeechBubble(shouldShowSpeechBubble)
    },

    handleAboutWebsiteMenu () {
      const moremeMenu = this.helper.menus.find(helperMenu => helperMenu.name === 'moreme')
      moremeMenu.isActive = false
      const aboutWebsiteMenu = this.helper.menus.find(helperMenu => helperMenu.name === 'aboutWebsite')
      aboutWebsiteMenu.isActive = !aboutWebsiteMenu.isActive
    },

    handleOldwebsiteMenu () {
      window.open('https://sky790312.herokuapp.com')
    },

    handleMoremeMenu () {
      const aboutWebsiteMenu = this.helper.menus.find(helperMenu => helperMenu.name === 'aboutWebsite')
      aboutWebsiteMenu.isActive = false
      const moremeMenu = this.helper.menus.find(helperMenu => helperMenu.name === 'moreme')
      moremeMenu.isActive = !moremeMenu.isActive
    },

    closeAboutWebsite () {
      const aboutWebsiteMenu = this.helper.menus.find(helperMenu => helperMenu.name === 'aboutWebsite')
      aboutWebsiteMenu.isActive = false
    },

    closeMoreme () {
      const moremeMenu = this.helper.menus.find(helperMenu => helperMenu.name === 'moreme')
      moremeMenu.isActive = false
    }
  }
}
</script>

<style lang="stylus" scoped>
$helper-footer-height = 85px

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
      // right: 0
      margin-left: 0

      @media screen and (min-width: $mobile-break-point) {
        margin-left: 50%
      }
    }

    &.to-right {
      // left: 0
      margin-right: 0

      @media screen and (min-width: $mobile-break-point) {
        margin-right: 50%
      }
    }
  }

  .contact-info-container {
    position: absolute
    bottom: 0
    width: 100%
    height: $helper-footer-height
    text-align: center
    background-color: $black

    .link {
      color: $white
    }
  }

  .about-website-container, .moreme-container {
    position: absolute
    top: 0
    width: 100%
    height: "calc(100% - %s)" % $helper-footer-height
    overflow-y: auto
    padding: 20px

    @media screen and (min-width: $mobile-break-point) {
      width: 50%
    }

    .close {
      position: absolute
      top: 10px
      right: 15px
      cursor: pointer
      font-size: 24px
      font-weight: bold
      line-height: 24px
    }
  }

  .about-website-container {
    left: 0
    background-color: #00C993

    .about-website-desc {
      font-size: 18px
    }

    .about-website-img {
      max-width: 100%
    }
  }

  .moreme-container {
    right: 0
    background-color: #E67F86

    // .moreme-img {
    //   max-width: 50%
    // }
  }

  .moreme-item {
    display: flex
    flex-wrap: wrap
    margin: 20px 0

    &:nth-child(even) {
      flex-direction: column-reverse

      @media screen and (min-width: $mobile-break-point) {
        flex-direction: row
      }
    }

    .moreme-left, .moreme-right {
      @extend .flex-center   
      width: 100%   
      padding: 20px

      @media screen and (min-width: $mobile-break-point) {
        width: 50%   
      }
    }

    img {
      max-width: 100%
    }
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

  .contact-info-slide-enter-active {
    transition: all 1s ease
  }

  .contact-info-slide-enter, .contact-info-slide-leave-to {
    opacity: 0
    transform: translateY(50px)
  }
}

</style>
