<template>
  <div
    id="sidebar">
    <div
      class="main">
      <i
        class="mobile-menu-bars fa fa-2x fa-bars"
        @click.stop="onMobileMenuBarsClick">
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
    <div
      :class="['sidebar-content-container', {'mobile-view': shouldShowSubMenu}]"
      @click.self="onMobileViewClick">
      <nav
        class="sidebar-content">
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
      <div
        class="sidebar-footer">
        <div>
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.linkUrl"
            class="social"
            target="_blank">
            <i
              :class="['fa fa-2x', social.icon]">
            </i>
          </a>
        </div>
        <div
          class="language-container">
          <a
            v-for="settingLanguage in settingLanguages"
            :key="settingLanguage.name"
            :class="['language', { 'active': language === settingLanguage.name}]"
            @click="onSettingLanguageClick(settingLanguage.name)">
            {{ settingLanguage.text }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SIDEBAR_MENUS,
  SETTING_LANGUAGES,
  SOCIALS
} from '@/views/AppCommon/Sidebar/data'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Sidebar',

  data () {
    return {
      shouldShowSubMenu: false,
      sidebarMenus: SIDEBAR_MENUS,
      settingLanguages: SETTING_LANGUAGES,
      socials: SOCIALS
    }
  },

  computed: {
    ...mapGetters([
      'language'
    ])
  },

  methods: {
    ...mapActions([
      'setLanguage'
    ]),

    onMobileMenuBarsClick () {
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
    },

    onSettingLanguageClick (settingLanguage) {
      if (settingLanguage === this.language) {
        return
      }

      this.setLanguage(settingLanguage)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styl/variables'

#sidebar {
  background-color: $black
  height: $mobile-header-height

  @media screen and (min-width: $mobile-break-point) {
    width: $sidebar-width
    height: auto
    border-right: 1px groove $white
  }

  .main {
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

  .sidebar-content-container {
    position: fixed
    top: 0
    left: -100vw
    height: 100%
    display: flex
    flex-direction: column
    z-index: 1
    background: rgba(0, 0, 0, .8)
    padding: 20px
    transition: left .3s

    @media screen and (min-width: $mobile-break-point) {
      position: relative
      left: 0
      height: "calc(100% - %s)" % $mobile-header-height
      padding: 0 20px
    }

    &::after {
      display: block
      content: ''
      position: absolute
      top: 0
      left: $sidebar-width
      height: 100%
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
  }

  .sidebar-content {
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

  .sidebar-footer {
    margin: auto 0 10px 0
    text-align: center

    .fa {
      padding: 0 5px
    }
  }

  .social {
    color: $white
    opacity: 1

    &:hover {
      opacity: 0.8
    }
  }

  .language-container {
    margin: 10px 0
    padding-top: 10px
    border-top: 1px solid white

    .language {
      opacity: 0.4

      &:hover, &.active {
        opacity: 1
      }

      &:not(:last-child) {
        &:after {
          content: '|'
          opacity: 1
        }
      }
    }
  }

  .mobile-menu-bars {
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
