<template>
  <div
    id="app-sidebar">
    <h1>
      <router-link
        class="main-menu"
        :to="{name: 'home'}">
        KevinHu
      </router-link>
    </h1>
    <div
      v-for="menu in sidebarMenu"
      :class="menu.className"
      :key="menu.name">
      <router-link
        class="router-link"
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
  name: 'appSidebar',
  data () {
    return {
      sidebarMenu: [{
        name: 'profile',
        className: 'menu',
        text: 'sidebar.profile',
        icon: 'fa-address-card-o',
        route: {
          name: 'profile'
        }
      }, {
        name: 'skill',
        className: 'menu',
        text: 'sidebar.skill',
        icon: 'fa-bar-chart-o',
        route: {
          name: 'skill'
        }
      }, {
        name: 'projects',
        className: 'menu',
        text: 'sidebar.projects',
        icon: 'fa-archive',
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

.main-menu {
  color: $white
  text-decoration: none
}

.menu {
  padding: 10px 0

  .router-link {
    color: $white
    text-decoration: none

    &:hover {
      opacity: .7
    }

    &.router-link-active {
      font-weight: bold
    }
  }
}
</style>
