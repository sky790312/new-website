<template>
  <div
    id="sidebar">
    <div
      class="main-menu">
      <i
        class="sub-menu-bars fa fa-2x fa-bars"
        @click.stop="onSubMenuBarsClick">
      </i>
      <router-link
        class="router-link"
        :to="{name: 'home'}">
        <h1 class="name">
          Kevin Hu
        </h1>
        <h4
          class="title">
          Frontend Developer
        </h4>
      </router-link>
    </div>
    <nav
      :class="['sub-menu', {'mobile-view': shouldShowSubMenu}]"
      @click.self="onMobileViewClick">
      <ul>
        <li
          v-for="menu in sidebarMenus"
          :key="menu.name"
          class="menu">
          <router-link
            class="router-link"
            :to="menu.routeConfig"
            @click.native="closeSubMemu">
            <i
              :class="['fa', menu.icon]"
              aria-hidden="true">
            </i>
            {{ $t(menu.text) }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import {
  SIDEBAR_MENUS
} from '@/views/AppCommon/Sidebar/data'

export default {
  name: 'Sidebar',

  data () {
    return {
      shouldShowSubMenu: false,
      sidebarMenus: SIDEBAR_MENUS
    }
  },

  methods: {
    onSubMenuBarsClick () {
      this.shouldShowSubMenu = true
    },

    closeSubMemu () {
      this.shouldShowSubMenu = false
    },

    onMobileViewClick (event) {
      const appSidebarWidth = 180
      if (event.clientX <= appSidebarWidth) {
        return
      }

      this.closeSubMemu()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styl/variables'

#sidebar {
  background-color: $black

  @media screen and (min-width: $mobile-break-point) {
    width: $sidebar-width
    border-right: 1px groove $white
  }

  .main-menu {
    .router-link {
      display: block
      width: $sidebar-width
      margin: auto
      color: $white
      text-align: center
    }

    .name {
      margin-bottom: 0
    }

    .title {
      font-size: 12px
      margin-top: 0
      color: $light-gray
    }
  }

  .sub-menu {
    position: fixed
    top: 0
    left: -100vw
    height: 100vh
    z-index: 1
    background: rgba(0, 0, 0, .8)
    padding: 20px
    transition: left .3s

    @media screen and (min-width: $mobile-break-point) {
      position: relative
      left: 0
      height: auto
      padding: 0 20px
    }

    &::after {
      display: block
      content: ''
      position: absolute
      top: 0
      left: $sidebar-width
      height: 100vh
      width: "calc(100vw - %s)" % $sidebar-width
      background-color: rgba($black, 0.7)

      @media screen and (min-width: $mobile-break-point) {
        display: none
      }
    }

    &.mobile-view {
      left: 0
      width: $sidebar-width
      border-right: 1px groove $white
    }

    .menu {
      padding: 10px 15px
    }

    .router-link {
      position: relative
      color: $white

      &.active {
        cursor: default
        font-weight: bold
      }

      &:not(.active) {
        &::after {
          content: ''
          position: absolute
          bottom: -2px
          left: 0
          width: 0
          height: 1px
          background-color: $white
          transition: width .3s ease
        }

        &:hover {
          &::after {
            width: 100%
          }
        }
      }
    }
  }

  .sub-menu-bars {
    position: absolute
    top: 25px
    left: 20px
    z-index: 1
    color: $white
    cursor: pointer

    @media screen and (min-width: $mobile-break-point) {
      display: none
    }
  }
}
</style>