<template>
  <div id="about">
    about page
    <router-link :to="{name: 'home'}">
      to home
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'About',

  components: {
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables'

#about {
}

</style>
