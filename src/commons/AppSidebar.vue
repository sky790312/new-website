<template>
  <div
    id="app-sidebar">
    <h1>
      KevinHu
    </h1>
  </div>
</template>

<script>
export default {
  name: 'appSidebar',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styl/variables'

#app-sidebar {
  background-color: $black
  border-right: 1px groove $white
  color: $white
}
</style>
