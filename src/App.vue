<template>
  <div
    id="app">
    <entry-view v-if="isEntryView"></entry-view>
    <template v-else>
      <transition name="slide-fade" mode="out-in" appear>
        <app-sidebar v-show="!isEntryView"></app-sidebar>
      </transition>
      <transition name="fade" mode="out-in" appear>
        <keep-alive>
          <router-view class="route-view"></router-view>
        </keep-alive>
      </transition>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AppSidebar from './commons/AppSidebar'
import EntryView from './pages/EntryView'
import Hello from './components/Hello'

export default {
  name: 'app',

  components: {
    Hello,
    EntryView,
    AppSidebar
  },

  data () {
    return {
      // isEntryView: true
    }
  },

  computed: {
    ...mapGetters([
      'isEntryView'
    ])
  },

  methods: {
    ...mapActions([
      // 'exampleGetFirebaseData',
      // 'examplePostFirebaseData'
    ])

    // handleAddUserButton () {
    //   const user = {
    //     name: this.newUserName
    //   }
    //   this.examplePostFirebaseData(user)
    //     .then(resp => {
    //       // console.log('resp: ', resp)
    //     })
    //     .catch(error => {
    //       console.log('catch error: ', error)
    //     })
    // },
    //
    // handleError () {
    //
    // }
  },

  beforeMount () {
    // this.exampleGetFirebaseData()
    //   .then(resp => {
    //     // console.log('resp: ', resp)
    //   })
    //   .catch(error => {
    //     this.handleError(error)
    //     // console.log('catch error: ', error)
    //   })
  }
}
</script>

<style lang="stylus">
@import './styles/global'
@import './styles/variables'

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  height: 100vh
  /*display: grid
  grid-template-areas:
    "sidebar" "content"
  grid-template-columns: auto
  grid-template-rows: 0.1fr 0.9fr*/
  display: flex
  flex-direction: column
  background-color: $black

  @media (min-width: 768px) {
    flex-direction: row
    /*grid-template-areas:
      "sidebar content"
    grid-template-columns: .2fr .8fr
    grid-template-rows: auto*/
  }

  /*.app-sidebar {
    grid-area: sidebar
  }*/

  /*.route-view {
    grid-area: content
    display: flex
    justify-content: center
    align-items: center
  }*/

  .route-view {
    margin: auto
  }
}

</style>
