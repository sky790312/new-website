<template>
  <div
    id="about">
    profile page
    <router-link
      :to="{name: 'home'}">
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

<style lang="stylus" scoped>
@import '~styl/variables'

#about {
}

</style>
