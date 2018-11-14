<template>
  <div
    id="experience">
      <h1
        class="page-title">
        {{ $t('menus.experience') }}
      </h1>
      <section>
        <transition
          name="fade"
          mode="out-in">
          <div 
            v-if="shouldShowCurrentExperience"
            key="current-experience"
            class="current-experience experience-container">
            <img
              :src="currentExperience.imageUrl">
            <p>
              {{ $t(currentExperience.desc) }}
            </p>
          </div>
          <div
            v-else
            key="default-experience"
            class="default-experience experience-container">
            <div>
              <i
                class="fa fa-3x fa-user">
              </i>
              <i
                class="fa fa-3x fa-user-secret">
              </i>
              <i
                class="fa fa-3x fa-user">
              </i>
            </div>
            <h3>
              {{ $t('experience.sentences') }}
            </h3>
          </div>
        </transition>
        <i-timeline
          :items="experiences"
          @onItemHover="handleExperienceHover">
          <template
            slot-scope="{ item }">
            <h4
              class="experience-time">
              {{ item.time }}
            </h4>
            <h3
              class="experience-title">
              {{ item.title }}
            </h3>
            <div
              class="experience-img-container">
              <img
                class="experience-img"
                :src="item.imageUrl">
            </div>
            <h3
              class="experience-topic">
              {{ $t(item.topic) }}
            </h3>
            <div
              v-show="item.skills && item.skills.length"
              class="experience-skills-container">
              {{ $t('menus.skills') }}: 
              <span
                v-for="skill in item.skills"
                :key="skill">
                {{ skill }}
              </span>
            </div>
            <p class="experience-desc">
              {{ $t(item.desc) }}
            </p>
          </template>
        </i-timeline>
      </section>
  </div>
</template>

<script>
import {
  EXPERIENCES
} from '@/views/Experience/data'
const ITimeline = () => import('@/components/ITimeline')

export default {
  name: 'Experience',

  components: {
    ITimeline
  },

  data () {
    return {
      shouldShowCurrentExperience: false,
      currentExperience: {},
      experiences: EXPERIENCES
    }
  },

  methods: {
    handleExperienceHover (experience, isHover) {
      this.currentExperience = isHover ? experience : {}
      this.shouldShowCurrentExperience = isHover
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styl/variables'
@import '~styl/extends'

$experience-circle-width = 50px

#experience {
  .experience-container {
    color: $yellow
    margin: 80px 0
    height: 300px
    @extend .flex-center
    flex-direction: column

    &.default-experience {
      text-align: center

      .fa {
        margin: 0 5px
      }
    }
  }

  .experience-title {
    display: none

    @media screen and (min-width: $mobile-break-point) {
      display: block
      align-self: center
      height: 45px
    }
  }

  .experience-time {
    align-self: center

    @media screen and (min-width: $mobile-break-point) {
      height: 40px
    }
  }

  .experience-topic {
    align-self: center

    @media screen and (min-width: $mobile-break-point) {
      height: 105px
    }
  }

  .experience-img-container {
    align-self: center

    .experience-img {
      max-width: 100%
    }
  }

  .experience-skills-container {
    border-top: 1px solid $white
    border-bottom: 1px solid $white
    padding: 10px 0

    @media screen and (min-width: $mobile-break-point) {
      border: none
    }
  }

  .experience-title, .experience-time, .experience-topic, .experience-img-container, .experience-skills-container, .experience-desc {
    width: "calc(100% - %s)" % $experience-circle-width
    padding-left: 20px

    @media screen and (min-width: $mobile-break-point) {
      width: auto
      padding-left: 0
    }

    @media screen and (min-width: $pad-break-point) {
      height: auto
    }
  }

  .experience-img-container, .experience-desc {
    @media screen and (min-width: $mobile-break-point) {
      display: none
    }
  }
}

</style>
