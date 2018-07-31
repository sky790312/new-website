<template>
  <div
    id="app-sidebar">
    <div
      class="main-menu">
      <i
        class="sub-menu-bars fa fa-2x fa-bars"
        @click.stop="onSubMenuBarsClick">
      </i>
      <h1>
        <router-link
          class="name router-link"
          :to="{name: 'home'}">
          Kevin Hu
          <h4
            class="title">
            Frontend Developer
          </h4>
        </router-link>
      </h1>
    </div>
    <nav
      :class="['sub-menu', {'mobile-slide': shouldShowSubMenu}]">
      <ul>
        <li
          v-for="menu in sidebarMenus"
          :key="menu.name"
          class="menu">
          <router-link
            class="router-link"
            :to="menu.route">
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
        name: 'profile',
        text: 'menus.profile',
        icon: 'fa-address-card-o',
        route: {
          name: 'profile'
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
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styl/variables'

#app-sidebar {
  background-color: $black
  // padding: 0 15px

  @media screen and (min-width: $mobileBreakPoint) {
    width: $appSidebarWidth
    border-right: 1px groove $white
  }

  .main-menu {
    padding-bottom: 10px
    text-align: center

    .name {
      color: $white
      padding-bottom: 10px
    }

    .title {
      font-size: 12px
      margin: 0
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
    border-right: 1px solid $light-gray
    padding: 20px
    transition: left .5s

    &.mobile-slide {
      left: 0
    }

    &:before {
      display: block
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 100vw
      height: 100vh
      background-color: rgba($black, 0.7)

      @media screen and (min-width: $mobileBreakPoint) {
        display: none
      }
    }

    @media screen and (min-width: $mobileBreakPoint) {
      position: relative
      left: 0
      padding: 0 20px
      border-right: none
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
        &:after {
          content: ''
          position: absolute
          bottom: -1px
          left: 0
          width: 0
          height: 1px
          background-color: $white
          transition: width .3s ease
        }

        &:hover:after {
          width: 100%
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
    display: block

    @media screen and (min-width: $mobileBreakPoint) {
      display: none
    }
  }
}
</style>
