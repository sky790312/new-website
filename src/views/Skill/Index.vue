<template>
  <div
    id="skill"
    :ref="'skillContainer'">
    <div
      v-for="skill in skills"
      :key="skill.name"
      :ref="`${skill.name}`"
      class="item main">
      <div
        class="title">
        {{ skill.title }}
      </div>
      <div
        v-for="(subSkill, index) in skill.child"
        :key="subSkill.name"
        :ref="`${skill.name}${index}`"
        class="item sub">
        <div
          class="title">
          {{ subSkill.title }}
        </div>
        <div
          class="detail">
          {{ subSkill.desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import 'three/examples/js/libs/tween.min'
import 'three/examples/js/controls/TrackballControls'
import 'three/examples/js/renderers/CSS3DRenderer.js'
import {
  SKILLS,
  transform
} from '@/views/Skill/helper.js'

let camera, scene, renderer, controls
let css3dObjects = []

export default {
  name: 'Skill',

  data () {
    return {
      isMobileView: false,
      targets: {
        pcView: [],
        mobileView: []
      },
      skills: SKILLS
    }
  },

  mounted () {
    this.isMobileView = !(window.innerWidth >= 768)
    this.init()
    this.animate()
    transform(this.targets.pcView, 2000, css3dObjects, this.render)
  },

  watch: {
    'isMobileView': {
      handler (newVal) {
        if(newVal) {
          camera = new THREE.PerspectiveCamera(this.cameraFov, this.$refs.skillContainer.offsetWidth / this.$refs.skillContainer.offsetHeight, 1, 10000)
          transform(this.targets.mobileView, 500, css3dObjects, this.render)
        } else {
          camera = new THREE.PerspectiveCamera(this.cameraFov, this.$refs.skillContainer.offsetWidth / this.$refs.skillContainer.offsetHeight, 1, 10000)
          transform(this.targets.pcView, 500, css3dObjects, this.render)
        }
      },
      deep: true
    }
  },

  computed: {
    cameraFov () {
      return this.isMobileView ? 80 : 40
    }
  },

  methods: {
    init () {
      camera = new THREE.PerspectiveCamera(this.cameraFov, this.$refs.skillContainer.offsetWidth / this.$refs.skillContainer.offsetHeight, 1, 10000)
      // depth
      camera.position.z = 3000
      scene = new THREE.Scene()

      this.initElementPositions()

      renderer = new THREE.CSS3DRenderer()
      renderer.setSize(this.$refs.skillContainer.offsetWidth, this.$refs.skillContainer.offsetHeight)
      this.$refs.skillContainer.appendChild(renderer.domElement)

      controls = new THREE.TrackballControls(camera, renderer.domElement)
      controls.rotateSpeed = 0.5
      controls.minDistance = 500
      controls.maxDistance = 6000

      controls.addEventListener('change', this.render)
      window.addEventListener('resize', this.updateRender, false)
    },

    initElementPositions () {
      scene = new THREE.Scene()
      this.skills.map(skill => {
        this.generateElementsPosition(skill, this.$refs[`${skill.name}`][0])
        if (skill.child) {
          skill.child.map((subSkill, index) => {
            this.generateElementsPosition(subSkill, this.$refs[`${skill.name}${index}`][0])
          })
        }
      })
    },

    generateElementsPosition (skill, item) {
      let css3dObject = new THREE.CSS3DObject(item)
      css3dObject.position.x = Math.random() * 4000 - 2000
      css3dObject.position.y = Math.random() * 4000 - 2000
      css3dObject.position.z = Math.random() * 4000 - 2000

      scene.add(css3dObject)
      css3dObjects.push(css3dObject)

      this.generatePosition('pc', skill, item)
      this.generatePosition('mobile', skill, item)
    },

    generatePosition (view, skill, item) {
      let object3d = new THREE.Object3D()
      if (view === 'pc') {
        object3d.position.x = (skill.position.pc.x * 170) - 1615
        object3d.position.y = -(skill.position.pc.y * 200) + 900
        object3d.position.z = -2650
        this.targets.pcView.push(object3d)
      } else {
        object3d.position.x = (skill.position.mobile.x * 170) - 1615
        object3d.position.y = -(skill.position.mobile.y * 200) + 900
        object3d.position.z = -2650
        this.targets.mobileView.push(object3d)
      }
    },

    updateRender () {
      this.isMobileView = !(window.innerWidth >= 768)

      camera.aspect = this.$refs.skillContainer.offsetWidth / this.$refs.skillContainer.offsetHeight
      camera.updateProjectionMatrix()
      renderer.setSize(this.$refs.skillContainer.offsetWidth, this.$refs.skillContainer.offsetHeight)
      this.render()
    },

    animate () {
      requestAnimationFrame(this.animate)
      TWEEN.update()
      controls.update()
    },

    render () {
      renderer.render(scene, camera)
    }
  },

  beforeDestroy () {
    document.removeEventListener('resize', this.updateRender)
    controls.removeEventListener('change', this.render)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styl/variables'

#skill {
  height: 100%

  .item {
    box-shadow: 0px 0px 12px rgba(0, 255, 255, .5)
    border: 1px solid rgba(127, 255, 255, .25)
    padding: 10px
    text-align: center
    cursor: default
    word-wrap: break-word
    box-sizing: border-box

    &:hover {
      box-shadow: 0px 0px 12px rgba(0, 255, 255, .75)
      border: 1px solid rgba(127, 255, 255, .75)
    }

    &.main {
      display: flex
      justify-content: center
      align-items: center
      width: 360px
      height: 320px
      background-color: rgba(0, 127, 127, 1)

      .title {
        font-size: 42px
        font-weight: bold
        color: rgba(255, 255, 255, .75)
        text-shadow: 0 0 10px rgba(0, 255, 255, .95)
      }
    }

    &.sub {
      width: 150px
      height: 180px

      .title {
        margin: 5px 0
        font-size: 26px
        font-weight: bold
        color: rgba(255, 255, 255, .75)
        text-shadow: 0 0 10px rgba(0, 255, 255, .95)
      }
    }

    .detail {
      line-height: 28px
      font-size: 18px
      color: rgba(127, 255, 255, .75)
    }
  }
}

</style>
