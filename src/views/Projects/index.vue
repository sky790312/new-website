<template>
  <div
    id="projects">
    <h1 class="page-title">
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
          @click="onMainMenuClick(mainMenu, menuState)">
          {{ mainMenu }}
        </li>
      </menu>
    </nav>

    <transition-group
      name="sub-menu"
      tag="section"
      class="sub-menu-container"
      :style="subMenuContainerStyle">
      <menu 
        v-for="(filtersArray, filtersKey) in filters"
        :key="filtersKey"
        v-show="mainMenusState[filtersKey]"
        class="control-sub-menus"
        :ref="filtersKey">
        <li 
          v-for="(filterState, filter) in filtersArray"
          :key="filter"
          v-show="filterState.shouldShow"
          :class="['menu', { 'active': filterState.isActive }]"
          @click="onMenuClick(filtersKey, filter)">
          {{ filter }}
        </li>
      </menu>
    </transition-group>

    <section 
      class="active-menu-container"
      v-show="hasActiveFilters">
      <menu
        class="active-menus"
        v-for="(activeFilterArray, activeFilterKey) in activeFilters"
        :key="activeFilterKey">
        {{ activeFilterKey }}:
        <li
          v-for="activeFilter in activeFilterArray"
          :key="activeFilter"
          class="menu active has-close"
          @click="onMenuClick(activeFilterKey, activeFilter)">
          {{ activeFilter }}
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
        :class="['project', {'has-link': !!project.linkUrl}]"
        @click="onProjectClick(project)"
        @mouseenter="onProjectHover(project, true)"
        @mouseleave="onProjectHover(project,false)">
        <img
          :src="project.imageUrl"
          class="project-image">
        <div 
          class="project-title">
          {{ project.title }}
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import {
  PROJECTS
} from '@/views/Projects/data'
import {
  throttle
} from '@/utils'

export default {
  name: 'Projects',

  components: {
  },

  data () {
    return {
      projects: PROJECTS,
      companySkills: [],
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
      let projects = this.projects
      if (this.activeFilters.companies.length) {
        projects = projects.filter(project => {
          return !(this.activeFilters.companies.length && !~this.activeFilters.companies.indexOf(project.company))
        })

        const currectCompany = this.companySkills.find(companySkill => companySkill.company === this.activeFilters.companies[0])
        Object.keys(this.filters.skills).forEach(skill => {
          const isSkillInCurrentCompany = currectCompany.skills.includes(skill)
          this.filters.skills[skill].shouldShow = isSkillInCurrentCompany
          if (!isSkillInCurrentCompany) {
            this.filters.skills[skill].isActive = false
          }
        })
      }

      if (this.activeFilters.skills.length) {
        projects = projects.filter(project =>
          !!project.skills.find(skill =>
            this.activeFilters.skills.includes(skill)))
      }

      return projects
    },

    activeMainMenu () {
      return Object.keys(this.mainMenusState).reduce((accumulator, currentMenu, index) =>
        (this.mainMenusState[currentMenu])
          ? currentMenu
          : accumulator
      , '')
    },

    activeFilters () {
      return {
        companies: Object.keys(this.filters.companies).filter(company => this.filters.companies[company].isActive),
        skills: Object.keys(this.filters.skills).filter(skill => this.filters.skills[skill].isActive)
      }
    },

    hasActiveFilters () {
      return !!(this.activeFilters.companies.length || this.activeFilters.skills.length)
    }
  },

  methods: {
    ...mapActions([
      'setSpeechBubble',
      'setShouldShowSpeechBubble'
    ]),

    onMainMenuClick (currentMenu, currentMenuState) {
      Object.keys(this.mainMenusState).forEach(mainMenu => {
        this.mainMenusState[mainMenu] = (!currentMenuState && mainMenu === currentMenu)
      })

      this.$nextTick(() => {
        this.setSubMenuContainerStyle()
      })
    },

    onMenuClick (mainMenu, subMenu) {
      (mainMenu === 'skills')
        ? this.filters[mainMenu][subMenu].isActive = !this.filters[mainMenu][subMenu].isActive
        : this.clearFilter(mainMenu, subMenu, this.filters[mainMenu][subMenu].isActive)
    },

    onProjectHover (project, isHover) {
      const speechBubbleText = isHover ? project.name : ''
      const speechBubble = {
        type: 'project',
        text: speechBubbleText
      }
      this.setSpeechBubble(speechBubble)
      this.setShouldShowSpeechBubble(isHover)
    },

    onProjectClick (project) {
      if (!project.linkUrl) {
        return
      }

      window.open(project.linkUrl)
    },

    clearFilter (mainMenu, subMenu, state) {
      Object.keys(this.filters[mainMenu]).forEach(filterSubMenu => {
        this.filters[mainMenu][filterSubMenu].isActive = (!state && subMenu === filterSubMenu)
      })
    },

    clearAllFilters () {
      Object.keys(this.filters).forEach(this.clearFilter)
      this.projects.forEach(project => {
        project.skills.forEach(skill => (
          this.setDefaultState('skills', skill)
        ))
      })
      this.$nextTick(() => {
        this.setSubMenuContainerStyle()
      })
    },

    setDefaultState (items, item) {
      const initState = {
        shouldShow: true,
        isActive: false
      }
      this.$set(this.filters[items], item, initState)
    },

    setCompanySkills () {
      const companySkills = this.projects.reduce((accumulator, { company, skills }, index, sourceArray) => {
        if (!accumulator.get(company)) {
          accumulator.set(company, {company, skills: new Set(skills)})
        } else {
          skills.forEach(skill => accumulator.get(company).skills.add(skill))
        }
        if (!sourceArray[index + 1]) {
          accumulator.forEach(companySkill => (companySkill.skills = [...companySkill.skills]))
        }
        return accumulator
      }, new Map()).values()

      this.companySkills = Array.from(companySkills)
    },

    setSubMenuContainerStyle () {
      if (!this.$refs[this.activeMainMenu]) {
        this.subMenuContainerStyle.height = 0
        return
      }

      this.subMenuContainerStyle.height = (this.$refs[this.activeMainMenu][0])
        ? `${this.$refs[this.activeMainMenu][0].clientHeight + 50}px`
        : 0
    }
  },

  mounted () {
    this.projects.forEach(project => {
      this.setDefaultState('companies', project.company)
      project.skills.forEach(skill => {
        this.setDefaultState('skills', skill)
      })
    })

    this.setCompanySkills()

    window.addEventListener('resize', throttle(this.setSubMenuContainerStyle, 250), false)
  },

  beforeDestroy () {
    document.removeEventListener('resize', throttle(this.setSubMenuContainerStyle, 250))
  }
}
</script>

<style lang="stylus" scoped>
@import '~styl/variables'
@import '~styl/extends'

#projects {
  color: $white

  .page-title {
    padding: 20px 0 0 20px
  }

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

    &::before {
      content: ''
      position: absolute
      bottom: -2px
      left: 0
      width: 0
      height: 1px
      background-color: $purple
      transition: width .3s ease
    }

    &::after {
      content: '\2022'
      color: $purple
      width: 5px
      transition: transform .15s ease-in-out
      opacity: 0
    }

    &:hover {
      &::before {
        width: 100%
      }
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
    padding: 0 0 0 20px
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
    flex-wrap: wrap
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
    @extend .flex-center
    color: $white
    margin: 20px
    width: 200px
    height: 150px
    cursor: default
    overflow: hidden

    &:hover {
      .project-image {
        opacity: .3
      }

      .project-title {
        opacity: 1
      }
    }

    &.has-link {
      cursor: pointer
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
  }

  .sub-menu-enter,
  .sub-menu-leave-to {
    opacity: 0
  }

  .sub-menu-leave,
  .sub-menu-enter-to {
    opacity: 1
  }

  .sub-menu-enter-active,
  .sub-menu-leave-active {
    position: absolute
    width: 100%
    transition: opacity .2s ease-in-out
  }

  .sub-menu-enter-active {
    transition-delay: .1s
  }

  .project-enter {
    transform: scale(.9)
  }

  .project-enter,
  .project-leave-to {
    opacity: 0
  }

  .project-enter-active {
    transition: all .3s ease-out
  }

  .project-leave-active {
    transition: all .2s ease-in
    position: absolute
    z-index: 0
  }

  .project-move { 
    transition: all .6s ease-in-out .05s
  }
}

</style>
