<template>
  <div
    id="home">
    <transition
      name="fade"
      appear>
      <stroke-dash-text
        :text="strokeDashText">
      </stroke-dash-text>
    </transition>
    <transition
      name="fade"
      appear>
      <h3
        class="job-title">
        {{ $t('jobTitle') }}
      </h3>
    </transition>
    <transition
      name="fade"
      appear>
      <div class="tags">
        <tag
          v-for="tag in tags"
          :key="tag.name"
          :text="tag.text">
        </tag>
      </div>
    </transition>
    <transition
      name="fade"
      appear>
      <typing-text
        :text="typingText">
      </typing-text>
    </transition>
  </div>
</template>

<script>

import StrokeDashText from '@/components/StrokeDashText'
import TypingText from '@/components/TypingText'
import Tag from '@/components/Tag'
// import { mapActions } from 'vuex'

export default {
  name: 'home',

  components: {
    StrokeDashText,
    TypingText,
    Tag
  },

  data () {
    return {
      strokeDashText: 'kevinhu',
      typingText: this.$t('homePage.welcome'),
      tags: [{
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
  @extend .flex-center
  flex-direction: column
}

.job-title {
  color: $white
  cursor: default
  margin-top: 0
}

.tags {
  display: flex
  margin-bottom: 40px
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s ease
}

#home {
  position: relative
  z-index: 0
  background-size: cover
  background-color: $dark-gray
  background-image: radial-gradient(farthest-corner, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.95))
  // transform-style: preserve-3d;
  // transform: translate3d(0, 0, 0);
  // transition: background-color 3s ease-in-out 2s;
  // perspective: 1000px;

  &:after {
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
    content: ''
    z-index: -1
    opacity: 0.06
    background-image: url('~assets/bkg.jpg')
    // transform-origin: 50% 50%
    // transform-style: preserve-3d
    transition: opacity 3s ease-in-out, transform 5s ease-in-out
    animation: splash 15s linear infinite both
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
