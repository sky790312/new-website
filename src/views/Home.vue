<template>
  <div
    id="home">
    <i-stroke-dash-text
      :text="myName">
    </i-stroke-dash-text>
    <h3
      class="job-title">
      Frontend Developer
    </h3>
    <div class="main-skill-tags-container">
      <i-tag
        v-for="mainSkill in mainSkillTags"
        :key="mainSkill.name"
        :text="mainSkill.text">
      </i-tag>
    </div>
    <i-typing-text
      :text="welcomeText">
    </i-typing-text>
  </div>
</template>

<script>

const IStrokeDashText = () => import('@/components/IStrokeDashText')
const ITypingText = () => import('@/components/ITypingText')
const ITag = () => import('@/components/ITag')

export default {
  name: 'Home',

  components: {
    IStrokeDashText,
    ITypingText,
    ITag
  },

  data () {
    return {
      myName: 'kevinhu',
      welcomeText: 'Welcome to my website, enjoy and have fun!',
      mainSkillTags: [{
        name: 'vue',
        text: 'Vue'
      }, {
        name: 'aframe',
        text: 'A-Frame'
      }, {
        name: 'd3',
        text: 'D3.js'
      }, {
        name: 'nodejs',
        text: 'Node.js'
      }, {
        name: 'firebase',
        text: 'Firebase'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>

#home {
  display: flex
  justify-content: flex-start
  align-items: center
  flex-direction: column
  position: relative
  z-index: 0
  background-size: cover
  background-color: $dark-gray
  background-image: radial-gradient(farthest-corner, rgba($black, 0.3), rgba($black, 0.95))
  // transform-style: preserve-3d;
  // transform: translate3d(0, 0, 0);
  // transition: background-color 3s ease-in-out 2s;
  // perspective: 1000px;

  @media screen and (min-width: $mobile-break-point) {
    justify-content: center
  }

  &::after {
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
    content: ''
    z-index: -1
    opacity: 0.06
    background-image: url('~assets/home/bkg.jpg')
    // transform-origin: 50% 50%
    // transform-style: preserve-3d
    transition: opacity 3s ease-in-out, transform 5s ease-in-out
    animation: splash 15s linear infinite both
  }

  .job-title {
    color: $white
    cursor: default
    margin-top: 0
  }

  .main-skill-tags-container {
    @extend .flex-center
    flex-wrap: wrap
    margin-bottom: 40px
  }
}

@keyframes splash {
  0% {
    background-position: 0% 0%
  }
  100% {
    background-position: 0% -540px
  }
}

</style>
