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
            'active': menuState,
            'filtering': activeFilters[mainMenu].length
          }]"
          @click="setMainMenusState(mainMenu, menuState)">
          {{ mainMenu }}
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
          :class="['menu', { 'active': filterState }]"
          @click="setFilter(mainFilter, filter)">
          {{ filter }}
        </li>
      </menu>
    </transition-group>

    <section 
      class="active-menu-container"
      v-show="hasActiveFilters">
      <menu
        class="active-menus"
        v-for="(activeFilterArray, activeFilter) in activeFilters"
        :key="activeFilter">
        {{ activeFilter }}:
        <li
          v-for="filter in activeFilterArray"
          :key="filter"
          class="menu active has-close"
          @click="setFilter(activeFilter, filter)">
          {{ filter }}
        </li>
      </menu>
      <menu
        class="clear-menu">
        <li
          class="clear-all has-close"
          @click="clearAllFilters">
          Clear all
        </li>
      </menu>
    </section>

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
    },

    hasActiveFilters () {
      return this.activeFilters.companies.length || this.activeFilters.skills.length
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
    margin-top: 40px
    border-bottom: 1px solid $light-gray
  }

  .control-main-menu {
    position: relative
    padding: 0
    z-index: 1
    cursor: pointer

    &::after {
      content: '\2022'
      color: $purple
      width: 5px
      transition: transform .15s ease-in-out
      opacity: 0
    }

    &:not(:last-child) {
      margin-right: 20px
    }
    
    &.active {
      color: $purple
    }

    &.filtering {
      &::after {
        opacity: 1
      }
    }
  }

  .sub-menu-container {
    position: relative
    height: 0
    overflow: hidden
    transition: height .35s

    &::after {
      content: ''
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      height: 20px
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
      transition: opacity .2s ease-in-out
    }

    &-enter-active {
      transition-delay: .1s
    }
  }

  .active-menu-container {
    display: flex
    flex-direction: column
    margin: 10px 0 20px

    @media screen and (min-width: $mobileBreakPoint) {
      flex-direction: row
    }
  }

  .control-main-menus {
    display: flex
    padding: 0
  }

  .control-sub-menus {
    display: flex
    flex-wrap: wrap
  }

  .active-menus, .clear-menu {
    margin: 15px 10px 0 0
    padding: 0
    display: flex
    align-items: center
  }

  .menu {
    margin: 5px
    padding: 5px 10px
    border: 1px solid $light-gray
    border-radius: 6px
    font-size: 0.8rem
    font-size: 14px
    cursor: pointer
    transition: all 275ms

    &:hover {
      border-color: $purple
    }

    &.active {
      color: white
      border-color: $purple
      background-color: $purple
    }
  }

  .has-close {
    &::after {
      content: '\00d7'
    }
  }

  .clear-all {
    cursor: pointer
    padding: 5px
    border: 1px solid $white

    &:hover {
      opacity: .7
    }
  }

  .project-container {
    display: flex
    flex-wrap: wrap
    justify-content: center

    @media screen and (min-width: $mobileBreakPoint) {
      justify-content: flex-start
    }
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
      transition: all .6s ease-in-out .05s
    }

    &-enter-active {
      transition: all .3s ease-out
    }

    &-leave-active {
      transition: all .2s ease-in
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
