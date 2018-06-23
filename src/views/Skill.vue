<template>
  <div
    id="skill">
    skill page
    <router-link
      :to="{name: 'home'}">
      to home
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Skill',

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

#skill {
}

</style>
