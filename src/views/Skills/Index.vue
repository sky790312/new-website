<template>
  <div
    id="skills"
    :ref="'skillContainer'">
    <div
      class="item main"
      v-for="skillCategory in skills"
      :key="skillCategory.name"
      :ref="`${skillCategory.name}`">
      <div
        class="title">
        {{ $t(`skills.${skillCategory.name}`) }}
      </div>
      <div
        class="item sub"
        v-for="(skill, index) in skillCategory.child"
        :key="skill.name"
        :ref="`${skillCategory.name}${index}`"
        @click="onSkillClick(skill)"
        @mouseenter="onSkillHover(skill, true)"
        @mouseleave="onSkillHover(skill, false)">
        <div
          class="title">
          {{ skill.title }}
        </div>
        <div
          class="detail">
          {{ skill.desc }}
        </div>
      </div>
    </div>
    <i-modal
      v-if="shouldShowSkillModal"
      @closeModal="shouldShowSkillModal = false">
      <div
        slot="header">
        <h3 class="skill-modal-title">
          {{ currentSkill.title }}
        </h3>
        <p
          class="skill-modal-desc">
          {{ currentSkill.desc }}
        <p/>
      </div>
      <div
        slot="body">
        {{ $t(currentSkillDetail) }}
      </div>
    </i-modal>
  </div>
</template>

<script>
/* eslint-disable */
import 'three/examples/js/libs/tween.min'
import 'three/examples/js/renderers/CSS3DRenderer'
import { mapActions } from 'vuex'
import {
  throttle,
  getWindowSize
} from '@/utils'
import {
  SKILLS
} from '@/views/Skills/data'

const IModal = () => import('@/components/IModal')

let camera, scene, renderer
let css3dObjects = []

export default {
  name: 'Skills',

  components: {
    IModal
  },

  data () {
    return {
      windowSize: '',
      views: {
        pcView: [],
        mobileView: []
      },
      skills: SKILLS,
      shouldShowSkillModal: false,
      currentSkill: {}
    }
  },

  mounted () {
    this.init()
    this.animate()
    this.windowSize = getWindowSize()
    this.transform(this.currentView, 2000)
  },

  watch: {
    'windowSize': {
      handler (newVal) {
        camera = new THREE.PerspectiveCamera(this.cameraFov, this.$refs.skillContainer.offsetWidth / this.$refs.skillContainer.offsetHeight, 1, 10000)
      },
      deep: true
    }
  },

  computed: {
    cameraFov () {
      let cameraFov
      if (this.windowSize === 's') {
        cameraFov = 60
      } else if (this.windowSize === 'm') {
        cameraFov = 55
      } else {
        cameraFov = 40
      }
      return cameraFov
    },

    currentView () {
      return (this.windowSize === 'l') ? this.views.pcView : this.views.mobileView
    },

    currentSkillDetail () {
      return `skills.${this.currentSkill.name}`
    }
  },

  methods: {
    ...mapActions([
      'setSpeechBubble',
      'setShouldShowSpeechBubble'
    ]),

    init () {
      camera = new THREE.PerspectiveCamera(this.cameraFov, this.$refs.skillContainer.offsetWidth / this.$refs.skillContainer.offsetHeight, 1, 10000)
      scene = new THREE.Scene()
      renderer = new THREE.CSS3DRenderer()
      this.initElementsPosition()
      renderer.setSize(this.$refs.skillContainer.offsetWidth, this.$refs.skillContainer.offsetHeight)
      this.$refs.skillContainer.appendChild(renderer.domElement)

      window.addEventListener('resize', throttle(this.onWindowResize, 250), false)
    },

    initElementsPosition () {
      this.skills.map(skill => {
        this.generateElementsPosition(skill, this.$refs[`${skill.name}`][0])
        skill.child.map((subSkill, index) => {
          this.generateElementsPosition(subSkill, this.$refs[`${skill.name}${index}`][0])
        })
      })
    },

    generateElementsPosition (skill, item) {
      let css3dObject = new THREE.CSS3DObject(item)
      css3dObject.position.x = Math.random() * 4000 - 2000
      css3dObject.position.y = Math.random() * 4000 - 2000
      css3dObject.position.z = Math.random() * 4000 - 2000

      scene.add(css3dObject)
      css3dObjects.push(css3dObject)

      this.generateView(skill, item)
    },

    generateView (skill, item) {
      let pcObject3d = new THREE.Object3D()
      pcObject3d.position.x = (skill.position.pc.x * 170) - 1615
      pcObject3d.position.y = -(skill.position.pc.y * 200) + 900
      pcObject3d.position.z = -3000
      this.views.pcView.push(pcObject3d)
      let mobileObject3d = new THREE.Object3D()
      mobileObject3d.position.x = (skill.position.mobile.x * 170) - 1520
      mobileObject3d.position.y = -(skill.position.mobile.y * 200) + 1200
      mobileObject3d.position.z = -2650
      this.views.mobileView.push(mobileObject3d)
    },

    onSkillClick (skill) {
      this.currentSkill = skill
      this.shouldShowSkillModal = true
    },

    onSkillHover (skill, isHover) {
      const speechBubbleText = isHover ? skill.name : ''
      const speechBubble = {
        type: 'skills',
        text: speechBubbleText
      }
      this.setSpeechBubble(speechBubble)
      this.setShouldShowSpeechBubble(isHover)
    },

    onWindowResize () {
      this.windowSize = getWindowSize()
      this.transform(this.currentView, 500)

      camera.aspect = this.$refs.skillContainer.offsetWidth / this.$refs.skillContainer.offsetHeight
      camera.updateProjectionMatrix()
      renderer.setSize(this.$refs.skillContainer.offsetWidth, this.$refs.skillContainer.offsetHeight)
      this.render()
    },

    animate () {
      requestAnimationFrame(this.animate)
      TWEEN.update()
    },

    render () {
      renderer.render(scene, camera)
    },

    transform (views, duration) {
      TWEEN.removeAll()
      css3dObjects.map((object, index) => {
        let target = views[index]
        new TWEEN.Tween(object.position)
          .to({
            x: target.position.x,
            y: target.position.y,
            z: target.position.z},
            Math.random() * duration + duration)
          .easing(TWEEN.Easing.Exponential.InOut)
          .start()
        new TWEEN.Tween(object.rotation)
          .to({
            x: target.rotation.x,
            y: target.rotation.y,
            z: target.rotation.z},
            Math.random() * duration + duration)
          .easing(TWEEN.Easing.Exponential.InOut)
          .start()
      })
      new TWEEN.Tween()
        .to({}, duration * 2)
        .onUpdate(this.render)
        .start()
    }
  },

  beforeDestroy () {
    document.removeEventListener('resize', throttle(this.onWindowResize, 250))
  }
}
</script>

<style lang="stylus" scoped>

$mainItemWidth = 360px
$mainItemHeight = 320px
$subItemWidth = 160px
$subItemHeight = 180px
$subItemWidthHover = 200px
$subItemHeightHover = 240px

$mainFontSize = 42px
$mainFontSizeHover = 56px
$subFontSize = 26px
$subFontSizeHover = 36px
$detailFontSize = 18px
$detailFontSizeHover = 30px


#skills {
  padding: 0

  .item {
    box-sizing: border-box
    box-shadow: 0px 0px 12px rgba($cyan, .5)
    border: 1px solid rgba($cyan2, .25)
    padding: 10px
    text-align: center
    word-wrap: break-word

    .title {
      margin: 5px 0
      font-weight: bold
      color: rgba($white, .75)
      text-shadow: 0 0 10px rgba($cyan, .95)
      transition: font-size .3s
    }

    .detail {
      line-height: 28px
      color: rgba($cyan2, .75)
    }

    &:hover {
      .title {
        margin: 10px 0
      }
    }
  }

  .main {
    @extend .flex-center
    width: $mainItemWidth
    height: $mainItemHeight
    background-color: $green2
    cursor: default

    &:hover {
      .title {
        font-size: $mainFontSizeHover
      }
    }

    .title {
      font-size: $mainFontSize
    }
  }

  .sub {
    width: $subItemWidth
    height: $subItemHeight
    cursor: pointer
    transition: width .3s, height .3s

    &:hover {
      width: $subItemWidthHover
      height: $subItemHeightHover
      box-shadow: 0px 0px 12px rgba($cyan, .75)
      border: 1px solid rgba($cyan2, .75)

      .title {
        font-size: $subFontSizeHover
      }

      .detail {
        font-size: $detailFontSizeHover
        line-height: 36px
      }
    }

    .title {
      font-size: $subFontSize
    }

    .detail {
      font-size: $detailFontSize
    }
  }

  .skill-modal-title {
    font-size: 22px
  }

  .skill-modal-desc {
    margin: 0
  }
}

</style>
