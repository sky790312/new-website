<template>
  <div id="app-sidebar">
    <h1>sidebar</h1>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../stylus/variables'

#app-sidebar {
  background-color: $black
  border-right: 1px groove $white
  color: $white
}
</style>
