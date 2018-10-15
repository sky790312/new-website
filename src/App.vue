<template>
  <div
    id="app">
    <entry-view
      v-if="isEntryView"
      @shouldShowEntryView="handleEntryView">
    </entry-view>
    <template
      v-else>
      <transition
        name="app-sidebar-slide"
        mode="out-in"
        appear>
        <app-sidebar
          v-show="!isEntryView">
        </app-sidebar>
      </transition>
      <transition
        name="fade"
        mode="out-in"
        appear>
        <keep-alive>
          <router-view
            class="router-view">
          </router-view>
        </keep-alive>
      </transition>
      <transition
        name="helper-slide"
        mode="out-in"
        appear>
        <helper>
        </helper>
      </transition>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

const EntryView = () => import('@/views/EntryView')
const AppSidebar = () => import('@/views/AppCommon/AppSidebar')
const Helper = () => import('@/views/AppCommon/Helper')

export default {
  name: 'App',

  components: {
    EntryView,
    AppSidebar,
    Helper
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
@import '~styl/index'
</style>

<style lang="stylus" scoped>
@import '~styl/variables'
@import '~styl/extends'

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
  color: $white
  background-color: $black

  @media screen and (min-width: $mobile-break-point) {
    flex-direction: row
    /*grid-template-areas:
      "sidebar content"
    grid-template-columns: .2fr .8fr
    grid-template-rows: auto*/
  }

  /*.app-sidebar {
    grid-area: sidebar
  }*/

  /*.router-view {
    grid-area: content
    display: flex
    justify-content: center
    align-items: center
  }*/
}

.router-view {
  position: relative
  // width: 100vw
  height: calc(100vh - 85px)
  overflow: auto
  padding: 20px
  /*margin: auto*/
  @media screen and (min-width: $mobile-break-point) {
    width: "calc(100vw - %s)" % $app-sidebar-width
    height: 100vh
  }
}

.app-sidebar-slide-enter-active, .app-sidebar-slide-leave-active {
  transition: all 2s ease
}

.app-sidebar-slide-enter, .app-sidebar-slide-leave-to {
  // transform: translateY(-50px)
  opacity: 0
  // @media screen and (min-width: $mobile-break-point) {
  transform: translateX(-50px)
  // }
}

.helper-slide-enter-active, .helper-slide-leave-active {
  transition: all 2s ease
}

.helper-slide-enter, .helper-slide-leave-to {
  // transform: translateY(-50px)
  opacity: 0
  // @media screen and (min-width: $mobile-break-point) {
  transform: translateY(50px)
  // }
}

</style>
