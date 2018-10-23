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
            <img
              class="experience-img"
              :src="experience.imageUrl">
            <h3
              class="experience-topic">
              {{ $t(experience.topic) }}
            </h3>
            <div
              v-show="experience.skills && experience.skills.length"
              class="experience-skill">
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
    align-items: center
    justify-content flex-end
    text-align: center
    outline: 1px dashed rgba(green, 0)
    padding-bottom: 40px
    margin: 0 0 0 -25px
    flex-wrap: wrap

    &::before {
      content: ''
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
      padding: 0 20px
      margin: -50px 0 0 0
      justify-content flex-start
      flex-direction: column
    }
  }

  .experience-title {
    display: none
    @media screen and (min-width: $mobile-break-point) {
      display: block
      height: 45px
    }
  }

  .experience-time {
    @media screen and (min-width: $mobile-break-point) {
      height: 40px
    }
  }

  .experience-topic {
    @media screen and (min-width: $mobile-break-point) {
      height: 105px
    }
  }

  .experience-img, .experience-desc {
    width: "calc(100% - %s)" % $experience-circle-width
    
    @media screen and (min-width: $mobile-break-point) {
      display: none
    }
  }

  .experience-title, .experience-time, .experience-topic, .experience-skill, .experience-desc {
    width: "calc(100% - %s)" % $experience-circle-width

    @media screen and (min-width: $mobile-break-point) {
      width: auto
    }

    @media screen and (min-width: $pad-break-point) {
      height: auto
    }
  }
}

</style>
