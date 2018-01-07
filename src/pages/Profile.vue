<template>
  <div
    id="profile">
    profile page
    <router-link
      :to="{name: 'home'}">
      to home
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'profile',

  components: {
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../stylus/variables'

#profile {
}

</style>
