<template>
  <div
    id="skill">
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
// import {
  // SKILLS
// } from '@/views/Skill/data.js'

let skillContainer, camera, scene, renderer, controls
let objects = []
let targets = {
  table: [],
  grid: []
}

export default {
  name: 'Skill',

  data () {
    return {
      skills: [{
        name: 'main',
        title: 'Main skills',
        x: 6,
        y: 3,
        child: [{
          name: 'vue',
          title: 'Vue',
          desc: 'Vuex, VueI18n, Vue Router',
          x: 4,
          y: 5
        }, {
          name: 'es2015',
          title: 'ES2015',
          desc: 'Async / Await',
          x: 5,
          y: 5
        }, {
          name: 'test',
          title: 'Test',
          desc: 'unit test: Karma, Jest, e2e test: Cypress',
          x: 6,
          y: 5
        }, {
          name: 'aframe',
          title: 'A-Frame',
          desc: 'three.js, WebVR, WebGL, 3dio.js',
          x: 7,
          y: 5
        }, {
          name: 'css',
          title: 'CSS',
          desc: 'CSS3, postcss, sass/scss, less, stylus',
          x: 8,
          y: 5
        }, {
          name: 'd3',
          title: 'D3.js',
          desc: 'charts',
          x: 4,
          y: 6
        }, {
          name: 'thirdparty',
          title: 'Third party APIs',
          desc: 'gapi, ga, fb..',
          x: 5,
          y: 6
        }, {
          name: 'tools',
          title: 'tools',
          desc: 'webpack, Git, Shell script, Jenkins',
          x: 6,
          y: 6
        }, {
          name: 'scrum',
          title: 'Scrum',
          desc: 'Redmine, Trello',
          x: 7,
          y: 6
        }, {
          name: 'nodejs',
          title: 'Node.js',
          desc: 'Express',
          x: 8,
          y: 6
        }]
      }, {
        name: 'other',
        title: 'Other skills',
        x: 13,
        y: 3,
        child: [{
          name: 'react',
          title: 'React',
          desc: 'react-redux, react-route, react-thunk, css module',
          x: 11,
          y: 5
        }, {
          name: 'reactnative',
          title: 'React Native',
          desc: 'Shoutem UI, NativeBase, Navigator',
          x: 12,
          y: 5
        }, {
          name: 'seo',
          title: 'SEO',
          desc: 'Google Analytics',
          x: 13,
          y: 5
        }, {
          name: 'baas',
          title: 'BaaS',
          desc: 'Firebase, LeanCloud',
          x: 14,
          y: 5
        }, {
          name: 'paas',
          title: 'PaaS',
          desc: 'GCP, AWS EC2, Azure',
          x: 15,
          y: 5
        }, {
          name: 'jquery',
          title: 'jQuery',
          desc: '',
          x: 11,
          y: 6
        }, {
          name: 'angularjs',
          title: 'AngularJS',
          desc: '',
          x: 12,
          y: 6
        }, {
          name: 'mvc',
          title: 'MVC',
          desc: 'Ruby on Rails, Java Play',
          x: 13,
          y: 6
        }, {
          name: 'database',
          title: 'Database',
          desc: 'MySQL, NoSQL',
          x: 14,
          y: 6
        }, {
          name: 'cms',
          title: 'CMS',
          desc: 'WordPress',
          x: 15,
          y: 6
        }]
      }]
    }
  },

  mounted () {
    skillContainer = document.getElementById('skill')
    this.init()
    this.animate()
    this.transform(targets.table, 2000)
  },

  methods: {
    init () {
      camera = new THREE.PerspectiveCamera(40, skillContainer.offsetWidth / skillContainer.offsetHeight, 1, 10000)
      // depth
      camera.position.z = 3000
      scene = new THREE.Scene()
      this.skills.map(skill => {
        this.generateElementPosition(skill, this.$refs[`${skill.name}`][0])
        if (skill.child) {
          skill.child.map((subSkill, index) => {
            this.generateElementPosition(subSkill, this.$refs[`${skill.name}${index}`][0])
          })
        }
      })

      renderer = new THREE.CSS3DRenderer()
      renderer.setSize(skillContainer.offsetWidth, skillContainer.offsetHeight)
      skillContainer.appendChild(renderer.domElement)

      controls = new THREE.TrackballControls(camera, renderer.domElement)
      controls.rotateSpeed = 0.5
      controls.minDistance = 500
      controls.maxDistance = 6000

      controls.addEventListener('change', this.render)
      window.addEventListener('resize', this.updateRender, false)
    },

    generateElementPosition (skill, item) {
      let css3dObject = new THREE.CSS3DObject(item)
      css3dObject.position.x = Math.random() * 4000 - 2000
      css3dObject.position.y = Math.random() * 4000 - 2000
      css3dObject.position.z = Math.random() * 4000 - 2000

      scene.add(css3dObject)
      objects.push(css3dObject)

      let object3d = new THREE.Object3D()
      object3d.position.x = (skill.x * 170) - 1615
      object3d.position.y = -(skill.y * 200) + 900
      object3d.position.z = -2650
      targets.table.push(object3d)
    },

    transform (targets, duration) {
      TWEEN.removeAll()
      for (var i = 0; i < objects.length; i++) {
        let object = objects[i]
        let target = targets[i]
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
      }
      new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(this.render)
        .start()
    },

    animate () {
      requestAnimationFrame(this.animate)
      TWEEN.update()
      controls.update()
    },

    updateRender () {
      camera.aspect = skillContainer.offsetWidth / skillContainer.offsetHeight
      camera.updateProjectionMatrix()
      renderer.setSize(skillContainer.offsetWidth, skillContainer.offsetHeight)
      this.render()
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
