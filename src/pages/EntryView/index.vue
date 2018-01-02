<template>
  <div id="entry-view">
    <a-scene :fog="scene.fog">
      <a-sky matrix></a-sky>
      <entry-text></entry-text>
      <entry-plane></entry-plane>
      <entry-camera></entry-camera>
    </a-scene>
  </div>
</template>

<script>
import AFRAME from 'aframe'
import { mapActions } from 'vuex'
import 'aframe-draw-component/dist/aframe-draw-component.min'

import EntryText from '@/pages/EntryView/EntryText'
import EntryCamera from '@/pages/EntryView/EntryCamera'
import EntryPlane from '@/pages/EntryView/EntryPlane'

export default {
  name: 'entryView',

  components: {
    EntryText,
    EntryCamera,
    EntryPlane
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
            this.canvas = this.draw.canvas
            this.drops = []
            const columns = this.canvas.width / fontSize
            for (let i = 0; i < columns; i++) {
              this.drops[i] = 1
            }
          },

          tick () {
            const ctx = this.draw.ctx
            ctx.fillStyle = 'rgba(0,0,0,0.05)'
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
            ctx.fillStyle = '#0F0'
            ctx.font = `${fontSize} px helvetica`
            for (let i = 0; i < this.drops.length; i++) {
              const txt = chars[Math.floor(Math.random() * chars.length)]
              ctx.fillText(txt, i * fontSize, this.drops[i] * fontSize)
              if (this.drops[i] * fontSize > this.canvas.height &&
                Math.random() > 0.975) {
                this.drops[i] = 0
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
        AFRAME.registerComponent('listener', {
          init () {
            this.el.addEventListener('click', event =>
              setTimeout(() =>
                vm.$emit('shouldShowEntryView', false), 500)
            )
          }
        })
      }
    }
  },

  beforeMount () {
    this.initMatrix()
    this.initListener()
  }
}
</script>

<style lang="stylus" scoped>
@import '~styl/variables'

#entry-view {
}
</style>
