<template>
  <div
    id="home">
    <transition
      name="fade"
      appear>
      <i-stroke-dash-text
        :text="myName">
      </i-stroke-dash-text>
    </transition>
    <transition
      name="fade"
      appear>
      <h3
        class="job-title">
        Frontend Developer
        <!-- {{ $t('jobTitle') }} -->
      </h3>
    </transition>
    <transition
      name="fade"
      appear>
      <div class="main-skill-tags-container">
        <i-tag
          v-for="mainSkill in mainSkillTags"
          :key="mainSkill.name"
          :text="mainSkill.text">
        </i-tag>
      </div>
    </transition>
    <transition
      name="fade"
      appear>
      <i-typing-text
        :text="welcomeText">
      </i-typing-text>
    </transition>
  </div>
</template>

<script>

// import { mapActions } from 'vuex'

const IStrokeDashText = () => import('@/components/IStrokeDashText')
const ITypingText = () => import('@/components/ITypingText')
const ITag = () => import('@/components/ITag')

export default {
  name: 'Home',

  components: {
    IStrokeDashText,
    ITypingText,
    ITag
  },

  data () {
    return {
      myName: 'kevinhu',
      welcomeText: this.$t('home.welcome'),
      mainSkillTags: [{
        name: 'vue',
        text: 'Vue'
      }, {
        name: 'aframe',
        text: 'A-Frame'
      }, {
        name: 'd3',
        text: 'D3.js'
      }, {
        name: 'nodejs',
        text: 'Node.js'
      }, {
        name: 'firebase',
        text: 'Firebase'
      }]
    }
  },

  methods: {
    // ...mapActions([
    //   'setLanguage'
    //   // 'exampleGetFirebaseData',
    //   // 'examplePostFirebaseData'
    // ])
  },

  beforeMount () {
    // const language = 'zh-tw'
    // setTimeout(() => {
    //   this.setLanguage(language)
    // }, 6000)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styl/variables'
@import '~styl/extends'

#home {
  // @extend .flex-center
  height: calc(100vh - 85px)
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  position: relative
  z-index: 0
  background-size: cover
  background-color: $dark-gray
  background-image: radial-gradient(farthest-corner, rgba($black, 0.3), rgba($black, 0.95))
  // transform-style: preserve-3d;
  // transform: translate3d(0, 0, 0);
  // transition: background-color 3s ease-in-out 2s;
  // perspective: 1000px;

  &::after {
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
    content: ''
    z-index: -1
    opacity: 0.06
    background-image: url('~assets/home/bkg.jpg')
    // transform-origin: 50% 50%
    // transform-style: preserve-3d
    transition: opacity 3s ease-in-out, transform 5s ease-in-out
    animation: splash 15s linear infinite both
  }

  @media screen and (min-width: $mobile-break-point) {
    height: auto
  }

  .job-title {
    color: $white
    cursor: default
    margin-top: 0
  }

  .main-skill-tags-container {
    display: flex
    flex-wrap: wrap
    justify-content: center
    margin-bottom: 40px
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s ease
  }
}

@keyframes splash {
  0% {
    background-position: 0% 0%
  }
  100% {
    background-position: 0% -540px
  }
}

</style>
