<template>
  <div id="home">
    <stroke-text
      :text="name">
    </stroke-text>
    <typing-write
      :text="welcome">
    </typing-write>
    <head-boy></head-boy>
    <!-- <router-link :to="{name: 'about'}">
      to about
    </router-link> -->
  </div>
</template>

<script>
import StrokeText from '../components/StrokeText'
import TypingWrite from '../components/TypingWrite'
import HeadBoy from '../components/HeadBoy'

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

>>> #head-boy {
  /*position: fixed*/
  /*top: 50%*/
  /*left: 50%*/
  /*margin: -42px 0 0 -42px*/
}
</style>
