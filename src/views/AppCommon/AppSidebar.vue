<template>
  <div
    id="app-sidebar">
    <h1
      class="main-menu">
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
    <nav
      class="sub-menu">
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
  }
}
</script>

<style lang="stylus" scoped>
@import '~styl/variables'

#app-sidebar {
  background-color: $black
  // padding: 0 15px
  box-sizing: border-box

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
    left: - $appSidebarWidth
    padding: 0

    @media screen and (min-width: $mobileBreakPoint) {
      position: relative
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
}
</style>
