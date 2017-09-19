<template>
  <div id="app">
    <entry-view
      v-if="isEntryView"
      @shouldShowEntryView="handleEntryView">
    </entry-view>
    <template v-else>
      <transition name="sidebar-slide" mode="out-in" appear>
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

import AppSidebar from '@/commons/AppSidebar'
import EntryView from '@/pages/EntryView'

export default {
  name: 'App',

  components: {
    EntryView,
    AppSidebar
  },

  data () {
    return {
      isEntryView: true
    }
  },

  computed: {
    ...mapGetters([
      // 'isEntryView'
    ])
  },

  methods: {
    ...mapActions([
      // 'exampleGetFirebaseData',
      // 'examplePostFirebaseData'
    ]),

    handleEntryView ($event) {
      this.isEntryView = $event
    }

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
</style>

<style lang="stylus" scoped>
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
    position: relative
    width: 100%
    height: 100%
    /*margin: auto*/
  }

  .sidebar-slide-enter-active, .sidebar-slide-leave-active {
    transition: all 2s ease
  }

  .sidebar-slide-enter, .sidebar-slide-leave-active {
    // transform: translateY(-50px)
    opacity: 0
    // @media (min-width: 768px) {
    transform: translateX(-50px)
    // }
  }
}

</style>
