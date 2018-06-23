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
        name="sidebar-slide"
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
            class="route-view">
          </router-view>
        </keep-alive>
      </transition>
      <transition
        name="helper-major-slide"
        mode="out-in"
        appear>
        <i-head-boy
          :class="helperMajor.className"
          :isActive="helperMajor.isActive"
          @onIHeadBoyClick="handleHelperMajorClick()">
        </i-head-boy>
      </transition>
      <div
        class="rotate-in-menus-container">
        <rotate-in-menus
          :isActive="helperMajor.isActive"
          :menus="rotateInMenus"
          @onRotateInMenusClick="onRotateInMenusClick()">
        </rotate-in-menus>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import EntryView from '@/views/EntryView'
import AppSidebar from '@/commons/AppSidebar'
import IHeadBoy from '@/components/IHeadBoy'
import RotateInMenus from '@/components/RotateInMenus'

export default {
  name: 'app',

  components: {
    EntryView,
    AppSidebar,
    IHeadBoy,
    RotateInMenus
  },

  data () {
    return {
      isEntryView: true,
      helperMajor: {
        className: ['helper-major'],
        isActive: false
      },
      rotateInMenus: [{
        name: 1,
        text: '1',
        status: 'completed'
      }, {
        name: 2,
        text: '2',
        status: 'completed'
      }, {
        name: 3,
        text: '3',
        status: 'completed'
      }, {
        name: 4,
        text: '4',
        status: 'completed'
      }, {
        name: 5,
        text: '5',
        status: 'pending'
      }]
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
    },

    handleHelperMajorClick () {
      this.helperMajor.className.push('active')
      this.helperMajor.isActive = true
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
}

.route-view {
  position: relative
  width: 100%
  height: 100%
  /*margin: auto*/
}

.sidebar-slide-enter-active, .sidebar-slide-leave-active {
  transition: all 2s ease
}

.sidebar-slide-enter, .sidebar-slide-leave-to {
  // transform: translateY(-50px)
  opacity: 0
  // @media (min-width: 768px) {
  transform: translateX(-50px)
  // }
}

.helper-major {
  position: fixed
  bottom: -20px
  right: 20px
  cursor: pointer

  &:hover {
    margin-bottom: 5px
  }

  &.active {
    @extend .absolute-center

    &:hover {
      margin-bottom: auto
    }
  }
}

.helper-major-slide-enter-active, .helper-major-slide-leave-active {
  transition: all 2s ease
}

.helper-major-slide-enter, .helper-major-slide-leave-to {
  // transform: translateY(-50px)
  opacity: 0
  // @media (min-width: 768px) {
  transform: translateY(50px)
  // }
}

.rotate-in-menus-container {
  @extend .absolute-center
  width: 85px
  height: 85px
  margin: auto
}

</style>
