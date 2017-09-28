<template>
  <div id="home">
    <vue-particles
      class="particles-background"
      color="#ffffff"
      :moveSpeed="1.5">
    </vue-particles>
    <stroke-text
      :text="name">
    </stroke-text>
    <typing-write
      :text="welcome">
    </typing-write>
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
import StrokeText from '@/components/StrokeText'
import TypingWrite from '@/components/TypingWrite'
import HeadBoy from '@/components/HeadBoy'

export default {
  name: 'Home',

  components: {
    StrokeText,
    TypingWrite,
    HeadBoy
  },

  data () {
    return {
      name: 'kevinhu',
      welcome: this.$t('homePage.welcome')
    }
  },

  beforeMount () {
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

#home {
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
}

.particles-background {
  position: absolute
  width: 100%
  height: 100%
  opacity: 0
  animation: opacity-fadein 1.5s ease forwards
}

/*.question-container {
  display: flex
  justify-content: center
  align-items: center
  margin-top: 40px

  .start {
    color: $white
    font-size: 4em
    margin-right: 20px
    cursor: pointer
  }
}*/

/*>>> #head-boy {
  cursor: pointer
  position: fixed
  top: 50%
  left: 50%
  margin: -42px 0 0 -42px
}*/

@keyframes opacity-fadein {
   from {
     opacity: 0
   }
   to {
     opacity: 1
   }
}
</style>
