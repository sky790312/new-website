<template>
  <div
    id="projects">
    <h1>
      {{ $t('menus.projects') }}
    </h1>
    <nav
      class="main-menu-container">
      <menu
        class="control-main-menus">
        <li 
          v-for="(menuState, mainMenu) in mainMenusState"
          :key="mainMenu"
          :class="['control-main-menu', {
            'active' : menuState,
            'filtering': activeFilters[mainMenu].length
          }]"
          @click="setMainMenusState(mainMenu, menuState)">
          {{ mainMenu }}
        </li>
        <transition
          name="fade">
          <li
            v-show="activeFilters.companies.length || activeFilters.skills.length"
            class="control-main-menu clear-all"
            @click="clearAllFilters">
            Clear all
          </li>
        </transition>
      </menu>
      <menu>
        <li
          v-for="(activeFilterArray, activeFilter) in activeFilters"
          :key="activeFilter">
          {{ activeFilter }}:
          <span
            v-for="filter in activeFilterArray"
            :key="filter">
            {{ filter }}
          </span>
        </li>
      </menu>
    </nav>

    <transition-group
      name="sub-menu-container"
      tag="section"
      class="sub-menu-container"
      :style="subMenuContainerStyle">
      <menu 
        v-for="(mainFilterArray, mainFilter) in filters"
        :key="mainFilter"
        class="control-sub-menus"
        v-show="mainMenusState[mainFilter]"
        :ref="mainFilter">
        <li 
          v-for="(filterState, filter) in mainFilterArray"
          :key="filter"
          :class="['control-sub-menu', { 'active': filterState }]"
          @click="setFilter(mainFilter, filter)">
          {{ filter }}
        </li>
      </menu>
    </transition-group>

    <transition-group 
      name="project"
      tag="div"
      class="project-container">
      <div
        v-for="project in filteredProjects"
        :key="project.name"
        class="project">
        <img
          :src="project.imageUrl"
          class="project-image">
        <div 
          class="project-title">
          {{ project.name }}
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import {
  PROJECTS
} from '@/views/Projects/data'

export default {
  name: 'Projects',

  components: {
  },

  data () {
    return {
      projects: PROJECTS,
      subMenuContainerStyle: {
        height: ''
      },
      filters: {
        companies: {},
        skills: {}
      },
      mainMenusState: {
        companies: false,
        skills: false
      }
    }
  },

  computed: {
    filteredProjects () {
      return this.projects.filter(project => {
        if (this.activeFilters.companies.length && !~this.activeFilters.companies.indexOf(project.company)) {
          return false
        }

        return !this.activeFilters.skills.length || this.activeFilters.skills.every(skill => ~project.skills.indexOf(skill))
      })
    },

    activeMainMenu () {
      return Object.keys(this.mainMenusState).reduce((accumulator, currentMenu, index) => {
        return (this.mainMenusState[currentMenu])
            ? currentMenu
            : accumulator
      }, '')
    },

    activeFilters () {
      return {
        companies: Object.keys(this.filters.companies).filter(company => this.filters.companies[company]),
        skills: Object.keys(this.filters.skills).filter(skill => this.filters.skills[skill])
      }
    }
  },

  watch: {
    activeMainMenu (oldVal, newVal) {
      if (oldVal === newVal) {
        return
      }

      this.$nextTick(() => {
        if (!this.$refs[oldVal]) {
          this.subMenuContainerStyle.height = 0
          return
        }

        this.subMenuContainerStyle.height = (this.$refs[oldVal][0])
          ? `${this.$refs[oldVal][0].clientHeight + 50}px`
          : 0
      })
    }
  },

  methods: {
    setFilter (mainMenu, subMenu) {
      if (mainMenu === 'companies') {
        this.filters[mainMenu][subMenu] = !this.filters[mainMenu][subMenu]
      } else {
        this.clearFilter(mainMenu, subMenu, this.filters[mainMenu][subMenu])
      }
    },

    clearFilter (mainMenu, subMenu, currentFilter) {
      Object.keys(this.filters[mainMenu]).forEach(filterSubMenu => {
        this.filters[mainMenu][filterSubMenu] = (!currentFilter && subMenu === filterSubMenu)
      })
    },

    clearAllFilters () {
      Object.keys(this.filters).forEach(this.clearFilter)
    },

    setMainMenusState (currentMenu, currentMenuState) {
      Object.keys(this.mainMenusState).forEach(mainMenu => {
        this.mainMenusState[mainMenu] = (!currentMenuState && mainMenu === currentMenu)
      })
    }
  },

  beforeMount () {
    PROJECTS.forEach(project => {
      this.$set(this.filters.companies, project.company, false)

      project.skills.forEach(skill => {
        this.$set(this.filters.skills, skill, false)
      })
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~styl/variables'

#projects {
  color: $white

  .main-menu-container {
    display: flex
    justify-content: space-between
    align-items: center
    white-space: nowrap
    margin: 0 1rem
    padding: 2rem 0.5rem 1rem
    border-bottom: 1px solid $light-gray

    .control-main-menus {
      display: flex
    }

    .control-main-menu {
      position: relative
      margin-left: 1rem
      text-transform: capitalize
      z-index: 1
      cursor: pointer

      &::after {
        content: '\00d7'
        display: inline-block
        color: transparent
        width: 0.5rem
        font-weight: 400
        transform: scale(0)
        transition: transform .15s ease-in-out
      }

      &.clear-all {
        color: #f68185
      }

      &.filtering {
        &::after {
          content: '\2022'
          transform: scale(1)
          color: $green2
        }
      }
    }
  }

  .sub-menu-container {
    position: relative
    height: 0
    overflow: hidden
    transition: height 350ms

    &::after {
      content: ''
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      height: 1rem
      background-image: linear-gradient(to top, $white, rgba($white, 0))
    }

    &-enter,
    &-leave-to {
      opacity: 0
    }

    &-leave,
    &-enter-to {
      opacity: 1
    }

    &-enter-active,
    &-leave-active {
      position: absolute
      width: 100%
      transition: opacity 200ms ease-in-out
    }

    &-enter-active {
      transition-delay: 100ms
    }
  }

  .control-sub-menus {
    padding: 0 1rem
    display: flex
    flex-wrap: wrap
    align-items: flex-start

    .control-sub-menu {
      margin-top: 0.5rem
      margin-right: 0.5rem
      padding: 0.25rem 0.5rem
      border: 1px solid $light-gray
      border-radius: 6px
      font-size: 0.8rem
      line-height: 1.35
      cursor: pointer
      transition: all 275ms

      &:hover {
        border-color: $green2
      }

      &.active {
        color: white
        border-color: $green2
        background-color: $green2
      }
    }
  }

  .project-container {
    display: flex
    flex-wrap: wrap
  }

  .project {
    position relative
    display: flex
    align-items: center
    justify-content center
    color: $white
    margin: 20px
    width: 200px
    height: 150px
    cursor: pointer
    overflow: hidden

    &:hover {
      .project-image {
        opacity: .3
      }

      .project-title {
        opacity: 1
      }
    }

    .project-image, .project-title {
      transition: opacity .3s ease
    }

    .project-title {
      position absolute
      width: 100%
      height: 100%
      display flex
      justify-content: center
      align-items: center
      opacity: 0
    }

    &-move { 
      transition: all 600ms ease-in-out 50ms 
    }

    &-enter-active {
      transition: all 300ms ease-out
    }

    &-leave-active {
      transition: all 200ms ease-in
      position: absolute
      z-index: 0
    }

    &-enter,
    &-leave-to {
      opacity: 0
    }

    &-enter {
      transform: scale(.9)
    }
  }
}

</style>
