<template>
  <div class="home">
    <type-writer
      text="welcome to KevinHu's website !"
    >
    </type-writer>
    <router-link :to="{name: 'about'}">
      to about
    </router-link>
  </div>
</template>

<script>
import TypeWriter from '../components/TypeWriter'

export default {
  name: 'Home',

  components: {
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

.home {
}

</style>
