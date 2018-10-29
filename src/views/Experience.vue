<template>
  <div
    id="experience">
      <h1>
        {{ $t('menus.experience') }}
      </h1>
      <section>
        <div class="current-experience">
          <template
            v-if="Object.keys(currentExperience).length">
            <img
              :src="currentExperience.imageUrl">
            <!-- <h2 class="experience-title">
              {{ currentExperience.title }}
            </h2> -->
            <p>
              {{ $t(currentExperience.desc) }}
            </p>
          </template>
          <template
            v-else>
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
          </template>
        </div>
        <div
          class="experience-timeline">
          <div 
            class="experience"
            v-for="experience in experiences"
            :key="experience.name"
            @mouseenter="onExperienceHover(experience, true)"
            @mouseleave="onExperienceHover(experience, false)">
            <h4
              class="experience-time">
              {{ experience.time }}
            </h4>
            <h3
              class="experience-title">
              {{ experience.title }}
            </h3>
            <div
              class="experience-img-container"            >
              <img
                class="experience-img"
                :src="experience.imageUrl">
            </div>
            <h3
              class="experience-topic">
              {{ $t(experience.topic) }}
            </h3>
            <div
              v-show="experience.skills && experience.skills.length"
              class="experience-skills-container">
              skills: 
              <span
                v-for="skill in experience.skills"
                :key="skill">
                {{ skill }}
              </span>
            </div>
            <p class="experience-desc">
              {{ $t(experience.desc) }}
            </p>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'Experience',

  components: {
  },

  data () {
    return {
      currentExperience: {},
      experiences: [{
        name: 'fujenUniversity',
        title: 'Fu Jen University',
        time: '2009/9 - 2012/6',
        topic: 'experience.fujenUniversity.topic',
        desc: 'experience.fujenUniversity.desc',
        skills: [],
        imageUrl: require('~assets/experience/fujen.jpg')
      }, {
        name: 'aite',
        title: 'Aite',
        time: '2013/8 - 2014/11',
        topic: 'experience.aite.topic',
        desc: 'experience.aite.desc',
        skills: ['nodejs', 'jquery', 'angularjs', 'wordpress'],
        imageUrl: require('~assets/experience/aite.png')
      }, {
        name: 'eztravel',
        title: 'ezTravel',
        time: '2014/12 - 2016/6',
        topic: 'experience.eztravel.topic',
        desc: 'experience.eztravel.desc',
        skills: ['jquery', 'knoutout', 'java play', 'maven', 'nginx', 'jenkins'],
        imageUrl: require('~assets/experience/eztravel.png')
      }, {
        name: 'istaging',
        title: 'iStaging',
        time: '2016/7 - now',
        topic: 'experience.istaging.topic',
        desc: 'experience.istaging.desc',
        skills: ['vue', 'react', 'webVR', 'e2e test', 'unit test', 'firebase', 'nodejs', 'golang', 'mySQL', 'jenkins', 'docker'],
        imageUrl: require('~assets/experience/istaging.png')
      }]
    }
  },

  methods: {
    onExperienceHover (experience, isHover) {
      this.currentExperience = isHover ? experience : {}
      // const speechBubbleText = isHover ? project.name : ''
      // const speechBubble = {
      //   type: 'projects',
      //   text: speechBubbleText
      // }
      // this.setSpeechBubble(speechBubble)
      // this.setShouldShowSpeechBubble(isHover)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styl/variables'
@import '~styl/extends'

$experience-circle-width = 50px

#experience {
  .current-experience {
    text-align: center
    color: $yellow
    margin: 80px 0
    height: 300px
    @extend .flex-center
    flex-direction: column

    .fa {
      margin: 0 5px
    }
  }

  .experience-timeline {
    outline: 1px dashed rgba(red, 0)
    margin: 0 0 0 25px
    border-left: 2px solid $white

    @media screen and (min-width: $mobile-break-point) {
      display: flex
      border-left: none
      border-top: 2px solid $white
      padding-top: 20px
      margin: 40px 0 0 0
    }
  }

  .experience {
    display: flex
    justify-content flex-end
    flex-wrap: wrap
    outline: 1px dashed rgba(green, 0)
    padding-bottom: 40px
    margin: 0 0 0 -25px

    &::before {
      content: ''
      align-self: center
      width: $experience-circle-width
      height: $experience-circle-width
      background-color: $white
      border-radius: 50%
    }
    
    &:last-child {
      padding-bottom: 0
    }

    &:hover {
      &::before {
        // width: 60px
        // height: 60px
        background-color: $yellow
      }
    }

    @media screen and (min-width: $mobile-break-point) {
      width: 33.33% // TODO: need calculate
      justify-content flex-start
      flex-direction: column
      padding: 0 20px
      margin: -50px 0 0 0
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
