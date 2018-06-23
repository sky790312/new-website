<template>
  <div
    id="projects">
    projects page
    <router-link
      :to="{name: 'home'}">
      to home
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Projects',

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

#projects {
}

</style>
