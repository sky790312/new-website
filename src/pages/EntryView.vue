<template>
  <div id="entry-view">
    <a-scene
      :fog="scene.fog">
      <a-sky
        matrix>
      </a-sky>
      <a-text
        :value="welcomeTitle.text"
        :position="welcomeTitle.position"
        :width="welcomeTitle.width">
      </a-text>
      <a-text
        :value="welcomeDesc.text"
        :position="welcomeDesc.position"
        :width="welcomeDesc.width">
      </a-text>
      <a-plane
        :position="plane.position"
        :rotation="plane.rotation"
        :width="plane.width"
        :height="plane.height"
        :color="plane.color">
        <a-animation
          :attribute="plane.animation.attribute"
          :dur="plane.animation.duration"
          :to="plane.animation.to"
          :repeat="plane.animation.repeat"
          :easing="plane.animation.easing">
        </a-animation>
      </a-plane>
      <a-camera :position="camera.position">
        <a-cursor
          :color="cursor.color"
          :geometry="cursor.geometry"
          listener>
          <a-animation
            :begin="cursor.animation.begin"
            :easing="cursor.animation.easing"
            :attribute="cursor.animation.attribute"
            :from="cursor.animation.from"
            :to="cursor.animation.to"
            :dur="cursor.animation.duration">
          </a-animation>
        </a-cursor>
      </a-camera>
    </a-scene>
  </div>
</template>

<script>
import AFRAME from 'aframe'
import { mapActions } from 'vuex'
import 'aframe-draw-component/dist/aframe-draw-component.min'

export default {
  name: 'EntryView',

  data () {
    return {
      scene: {
        fog: 'type: exponential; color:#444'
      },
      welcomeTitle: {
        text: this.$t('entryView.welcomeWebsite'),
        position: '-2.2 2 0',
        width: '7'
      },
      welcomeDesc: {
        text: this.$t('entryView.entryHint'),
        position: '-3.3 1.4 0',
        width: '7'
      },
      plane: {
        position: '0 0 0',
        rotation: '-90 0 0',
        width: 4,
        height: 4,
        color: '#f8f8f8',
        animation: {
          attribute: 'rotation',
          to: '-90 0 360',
          repeat: 'indefinite',
          easing: 'linear',
          duration: 5000
        }
      },
      camera: {
        position: '0 -0.8 3.8'
      },
      cursor: {
        color: 'white',
        geometry: 'primitive: ring; radiusOuter: 0.03; radiusInner: 0.02',
        animation: {
          attribute: 'scale',
          begin: 'click',
          from: '1 1 1',
          to: '1000 1000 1000',
          easing: 'ease-in',
          duration: '1000'
        }
      }
    }
  },

  methods: {
    ...mapActions([
      // 'setIsEntryView'
    ]),

    initMatrixView () {
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
        const self = this
        AFRAME.registerComponent('listener', {
          init () {
            this.el.addEventListener('click', evt =>
              setTimeout(() =>
                self.$emit('shouldShowEntryView', false), 500)
            )
          }
        })
      }
    }
  },

  beforeMount () {
    this.initMatrixView()
    this.initListener()
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

#entry-view {
}
</style>
