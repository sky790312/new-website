<template>
  <div
    id="home">
    <!-- <vue-particles
      class="particles-background"
      :color="VueParticlesConfig.color"
      :moveSpeed="VueParticlesConfig.moveSpeed">
    </vue-particles> -->
    <!-- <div class="masthead segment">
      <div class="ui page grid">
        <div class="column">
          <div class="introduction">
            <h1 class="ui inverted header">
              <span class="text">Perspective background from old <a href="https://www.semantic-ui.com/" target="_new">Semantic UI</a> website</span>
            </h1>
            <div class="ui hidden divider"></div>
          </div>
        </div>
      </div>
    </div> -->
    <stroke-dash
      :text="strokeDashText">
    </stroke-dash>
    <h3
      id="job-title">
      {{ $t('jobTitle') }}
    </h3>
    <tag>
    </tag>
    <typing-write
      :text="typingWriteText">
    </typing-write>
    <head-boy>
    </head-boy>
    <!-- <div class="question-container">
      <h3 class="start">start</h3>
      <head-boy></head-boy>
    </div> -->
    <!-- <router-link :to="{name: 'about'}">
      to about
    </router-link> -->
  </div>
</template>

<script>
// import Vue from 'vue'
// import VueParticles from 'vue-particles'

import StrokeDash from '@/components/StrokeDash'
import TypingWrite from '@/components/TypingWrite'
import HeadBoy from '@/components/HeadBoy'
import Tag from '@/components/Tag'
// import { mapActions } from 'vuex'

export default {
  name: 'home',

  components: {
    StrokeDash,
    TypingWrite,
    HeadBoy,
    Tag
  },

  data () {
    return {
      strokeDashText: 'kevinhu',
      typingWriteText: this.$t('homePage.welcome')
      // VueParticlesConfig: {
      //   // className: 'particles-background',
      //   color: '#fff',
      //   moveSpeed: 1.5
      // }
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
    // Vue.use(VueParticles)
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

// .particles-background {
//   position: absolute
//   width: 100%
//   height: 100%
//   opacity: 0
//   animation: opacity-fadein 1.5s ease forwards
// }

// .question-container {
//   display: flex
//   justify-content: center
//   align-items: center
//   margin-top: 40px
//
//   .start {
//     color: $white
//     font-size: 4em
//     margin-right: 20px
//     cursor: pointer
//   }
// }

#job-title {
  color: $white
  cursor: default
  opacity: 0
  margin-top: 0
  animation: opacity-fadein 2.2s ease forwards
}

>>> #head-boy {
  position: fixed
  bottom: -20px
  right: 20px
  opacity: 0
  cursor: pointer
  animation: opacity-fadein 2.2s ease forwards
}

@keyframes opacity-fadein {
   from {
     opacity: 0
   }
   to {
     opacity: 1
   }
}

#home {
  position: relative
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
    background-image: url('~assets/bkg.jpg')
    // transform-origin: 50% 50%
    // transform-style: preserve-3d
    transition: opacity 3s ease-in-out, transform 5s ease-in-out
    opacity: 0.06
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
