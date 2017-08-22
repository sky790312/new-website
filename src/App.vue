<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{ $t('example') }}</p>
    <hello></hello>
    <div>
      <router-link to="/page1">Go to page1</router-link>
      <router-link to="/page2">Go to page2</router-link>
    </div>
    <router-view class="route-view"></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Hello from './components/Hello'

export default {
  name: 'app',

  components: {
    Hello
  },

  computed: {
    ...mapGetters([
      // 'count'
    ])
  },

  methods: {
    ...mapActions([
      'exampleGetFirebaseData',
      'examplePostFirebaseData'
    ])
  },

  mounted () {
    console.log(this.exampleGetFirebaseData())
  }
}
</script>

<style lang="stylus">
@import './styles/global'
@import './styles/variables'

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
