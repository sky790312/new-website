<template>
  <div id="home">
    <stroke-text
      :text="name">
    </stroke-text>
    <type-writer
      :text="welcome">
    </type-writer>
    <!-- <router-link :to="{name: 'about'}">
      to about
    </router-link> -->
  </div>
</template>

<script>
import StrokeText from '../components/StrokeText'
import TypeWriter from '../components/TypeWriter'

export default {
  name: 'Home',

  components: {
    StrokeText,
    TypeWriter
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

</style>
