<template>
  <div
    id="home">
    <vue-particles
      class="particles-background"
      :color="VueParticlesConfig.color"
      :moveSpeed="VueParticlesConfig.moveSpeed">
    </vue-particles>
    <stroke-dash
      :text="strokeDashText">
    </stroke-dash>
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

export default {
  name: 'home',

  components: {
    StrokeDash,
    TypingWrite,
    HeadBoy
  },

  data () {
    return {
      strokeDashText: 'kevinhu',
      typingWriteText: this.$t('homePage.welcome'),
      VueParticlesConfig: {
        // className: 'particles-background',
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
