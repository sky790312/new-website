<template>
  <div
    id="app-sidebar">
    <h1>
      <router-link
        class="logo"
        :to="{name: 'home'}">
        KevinHu
      </router-link>
    </h1>
    <div
      v-for="menu in sidebarMenus"
      :key="menu.name"
      class="menu">
      <router-link
        :to="menu.route">
        <i
          :class="['fa', menu.icon]"
          aria-hidden="true">
        </i>
        {{ $t(menu.text) }}
      </router-link>
    </div>
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
  border-right: 1px groove $white
  color: $white
  padding: 0 15px
}

.logo {
  color: $white
  text-decoration: none
}

.menu {
  padding: 10px 0

  a {
    position: relative
    color: $white

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

    &.active {
      cursor: default
      font-weight: bold
    }
  }
}
</style>
