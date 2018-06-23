<template>
  <div
    id="experience">
    experience page
    <router-link
      :to="{name: 'home'}">
      to home
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Experience',

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

#experience {
}

</style>
