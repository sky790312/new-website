<template>
  <div id="home">
    <stroke-text
      text="KEVIN HU">
    </stroke-text>
    <type-writer
      text="welcome to my website !">
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

    }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables'

#home {

}

</style>
