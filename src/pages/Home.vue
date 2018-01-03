<template>
  <div id="home">
    <vue-particles
      :class="VueParticlesConfig.className"
      :color="VueParticlesConfig.color"
      :moveSpeed="VueParticlesConfig.moveSpeed">
    </vue-particles>
    <stroke-text
      :text="name">
    </stroke-text>
    <typing-write
      :text="welcome">
    </typing-write>
    <head-boy></head-boy>
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

import StrokeText from '@/components/StrokeText'
import TypingWrite from '@/components/TypingWrite'
import HeadBoy from '@/components/HeadBoy'

export default {
  name: 'home',

  components: {
    StrokeText,
    TypingWrite,
    HeadBoy
  },

  data () {
    return {
      name: 'kevinhu',
      welcome: this.$t('homePage.welcome'),
      VueParticlesConfig: {
        className: 'particles-background',
        color: '#fff',
        moveSpeed: 1.5
      }
    }
  },

  beforeMount () {
    // Vue.use(VueParticles)
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

.particles-background {
  position: absolute
  width: 100%
  height: 100%
  opacity: 0
  animation: opacity-fadein 1.5s ease forwards
}

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

>>> #head-boy {
  position: fixed
  bottom: -20px
  right: 20px
  opacity: 0
  cursor: pointer
  animation: opacity-fadein 1.5s ease forwards
}

@keyframes opacity-fadein {
   from {
     opacity: 0
   }
   to {
     opacity: 1
   }
}
</style>
