<template>
  <div
    id="app-sidebar">
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
            :to="menu.route"
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
export default {
  name: 'AppSidebar',

  data () {
    return {
      shouldShowSubMenu: false,
      sidebarMenus: [{
        name: 'about',
        text: 'menus.about',
        icon: 'fa-address-card-o',
        route: {
          name: 'about'
        }
      }, {
        name: 'skill',
        text: 'menus.skill',
        icon: 'fa-bar-chart-o',
        route: {
          name: 'skill'
        }
      }, {
        name: 'experience',
        text: 'menus.experience',
        icon: 'fa-file-text-o',
        route: {
          name: 'experience'
        }
      }, {
        name: 'projects',
        text: 'menus.projects',
        icon: 'fa-list-ol',
        route: {
          name: 'projects'
        }
      }]
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

#app-sidebar {
  background-color: $black

  @media screen and (min-width: $mobileBreakPoint) {
    width: $appSidebarWidth
    border-right: 1px groove $white
  }

  .main-menu {
    .router-link {
      display: block
      width: $appSidebarWidth
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

    @media screen and (min-width: $mobileBreakPoint) {
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
      left: $appSidebarWidth
      height: 100vh
      width: "calc(100vw - %s)" % $appSidebarWidth
      background-color: rgba($black, 0.7)

      @media screen and (min-width: $mobileBreakPoint) {
        display: none
      }
    }

    &.mobile-view {
      left: 0
      width: $appSidebarWidth
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

    @media screen and (min-width: $mobileBreakPoint) {
      display: none
    }
  }
}
</style>
