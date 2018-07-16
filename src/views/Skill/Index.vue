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
// import 'three/examples/js/controls/TrackballControls'
import 'three/examples/js/renderers/CSS3DRenderer'
import {
  throttle
} from '@/utils'
import {
  SKILLS
} from '@/views/Skill/data'

let camera, scene, renderer
let css3dObjects = []

export default {
  name: 'Skill',

  data () {
    return {
      viewSize: '',
      // currentView: [],
      // isPcView: true,
      windowWidth: 0,
      targets: {
        pcView: [],
        mobileView: []
      },
      skills: SKILLS
    }
  },

  mounted () {
    this.init()
    this.animate()
    this.getViewSize()
    this.transform(this.currentView, 2000)
  },

  watch: {
    'viewSize': {
      handler (newVal) {
        camera = new THREE.PerspectiveCamera(this.cameraFov, this.$refs.skillContainer.offsetWidth / this.$refs.skillContainer.offsetHeight, 1, 10000)
      },
      deep: true
    }
  },

  computed: {
    cameraFov () {
      let cameraFov
      if (this.viewSize === 's') {
        cameraFov = 60
      } else if (this.viewSize === 'm') {
        cameraFov = 55
      } else {
        cameraFov = 40
      }
      return cameraFov
    },

    currentView () {
      return (this.viewSize === 'l') ? this.targets.pcView : this.targets.mobileView
    }
  },

  methods: {
    init () {
      // camera = new THREE.PerspectiveCamera(this.cameraFov, this.$refs.skillContainer.offsetWidth / this.$refs.skillContainer.offsetHeight, 1, 10000)
      // depth
      // camera.position.z = 1000
      scene = new THREE.Scene()

      this.initElementPositions()

      renderer = new THREE.CSS3DRenderer()
      renderer.setSize(this.$refs.skillContainer.offsetWidth, this.$refs.skillContainer.offsetHeight)
      this.$refs.skillContainer.appendChild(renderer.domElement)

      // controls = new THREE.TrackballControls(camera, renderer.domElement)
      // controls.rotateSpeed = 0.5
      // controls.minDistance = 500
      // controls.maxDistance = 6000

      // controls.addEventListener('change', this.render)
      window.addEventListener('resize', throttle(this.onWindowResize, 250), false)
    },

    initElementPositions () {
      scene = new THREE.Scene()
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

      this.generatePosition('pc', skill, item)
      this.generatePosition('mobile', skill, item)
    },

    generatePosition (view, skill, item) {
      let object3d = new THREE.Object3D()
      if (view === 'pc') {
        object3d.position.x = (skill.position.pc.x * 170) - 1615
        object3d.position.y = -(skill.position.pc.y * 200) + 900
        object3d.position.z = -3000
        this.targets.pcView.push(object3d)
      } else {
        object3d.position.x = (skill.position.mobile.x * 170) - 1615
        object3d.position.y = -(skill.position.mobile.y * 200) + 1200
        object3d.position.z = -2650
        this.targets.mobileView.push(object3d)
      }
    },

    getViewSize () {
      let viewSize
      if (window.innerWidth < 768) {
        viewSize = 's'
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        viewSize = 'm'
      } else {
        viewSize = 'l'
      }
      this.viewSize = viewSize
    },

    onWindowResize () {
      this.getViewSize()
      this.transform(this.currentView, 500)

      camera.aspect = this.$refs.skillContainer.offsetWidth / this.$refs.skillContainer.offsetHeight
      camera.updateProjectionMatrix()
      renderer.setSize(this.$refs.skillContainer.offsetWidth, this.$refs.skillContainer.offsetHeight)
      this.render()

    },

    animate () {
      requestAnimationFrame(this.animate)
      TWEEN.update()
      // controls.update()
    },

    render () {
      renderer.render(scene, camera)
    },

    transform (targets, duration) {
      TWEEN.removeAll()
      css3dObjects.map((object, index) => {
        let target = targets[index]
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
    // controls.removeEventListener('change', this.render)
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
