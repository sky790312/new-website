<template>
  <div
    id="entry-view">
    <a-scene
      embedded
      :fog="scene.fog">
      <entry-text></entry-text>
      <entry-plane></entry-plane>
      <entry-camera></entry-camera>
      <a-sky
        matrix>
      </a-sky>
    </a-scene>
    <!-- <countdown-timer
      v-if="isMobileOrTablet()">
    </countdown-timer> -->
  </div>
</template>
<script>
import AFRAME from 'aframe'
import 'aframe-draw-component/dist/aframe-draw-component.min'
import { mapActions } from 'vuex'

const EntryText = () => import('@/views/EntryView/EntryText')
const EntryCamera = () => import('@/views/EntryView/EntryCamera')
const EntryPlane = () => import('@/views/EntryView/EntryPlane')
const CountdownTimer = () => import('@/views/EntryView/CountdownTimer')

export default {
  name: 'entryView',

  components: {
    EntryText,
    EntryCamera,
    EntryPlane,
    CountdownTimer
  },

  data () {
    return {
      scene: {
        fog: 'type: exponential; color:#444'
      }
    }
  },

  methods: {
    ...mapActions([
      // 'setIsEntryView'
    ]),

    initMatrix () {
      const chars = 'ABCDEFGHIJKLMNOPQRWXYZ'.split('')
      const fontSize = 8
      if (typeof (AFRAME.components.matrix) === 'undefined') {
        AFRAME.registerComponent('matrix', {
          dependencies: ['draw'],
          init () {
            this.draw = this.el.components.draw
            this.draw.canvas.width = '512'
            this.draw.canvas.height = '512'
            this.canvas = this.draw.canvas
            this.drops = []
            const columns = this.canvas.width / fontSize
            for (let i = 0; i < columns; i++) {
              this.drops[i] = 1
            }
            this.el.object3D.children[0].material.side = 1
          },
          tick () {
            const ctx = this.draw.ctx
            ctx.fillStyle = 'rgba(0,0,0,0.05)'
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
            ctx.fillStyle = '#0F0'
            ctx.font = `${fontSize} px helvetica`
            for (let i = 0; i < this.drops.length; i++) {
              const text = chars[Math.floor(Math.random() * chars.length)]
              ctx.fillText(text, i * fontSize, this.drops[i] * fontSize)
              if (this.drops[i] * fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0 // back to the top
              }
              this.drops[i] = this.drops[i] + 1
            }
            this.draw.render()
          }
        })
      }
    },

    initListener () {
      if (typeof (AFRAME.components.listener) === 'undefined') {
        const vm = this
        AFRAME.registerComponent('cursor-listener', {
          init () {
            this.el.addEventListener('click', event =>
              setTimeout(() => vm.$emit('shouldShowEntryView', false), 500)
                // const page = { name: 'home' }
                // self.$router.push(page)
            )
          }
        })
      }
    }
  },

  beforeMount () {
    this.initMatrix()
    this.initListener()
    // if (this.isMobileOrTablet()) {
    //   setTimeout(() => this.$emit('shouldShowEntryView', false), 6800)
    // }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styl/variables'

#entry-view {
  a-scene {
    height: 100vh
    width: 100vw
  }
}
</style>
