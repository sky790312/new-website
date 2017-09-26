<template>
  <div id="entry-view">
    <a-scene fog="type: exponential; color:#000">
      <a-sky matrix rotation="-5 -10 0"></a-sky>
      <!-- <a-entity>
        <a-animation attribute="rotation"
          delay="0"
          dur="1000"
          to="0 10 360"
          repeat="indefinite"
          easing="linear">
        </a-animation>
        <a-sphere id="sphere1" position="0 3 0" radius="0.3" color="white"></a-sphere>
      </a-entity> -->
      <a-text
        :value="welcomeWebsite"
        position="-2.2 2 0"
        width="7">
      </a-text>
      <a-text
        :value="entryHint"
        position="-3.3 1.4 0"
        width="7">
      </a-text>
      <a-plane
        position="0 0 0"
        rotation="-90 0 0"
        width="4"
        height="4"
        color="#f8f8f8">
        <a-animation
          attribute="rotation"
          delay="0"
          dur="5000"
          to="-90 0 360"
          repeat="indefinite"
          easing="linear">
        </a-animation>
      </a-plane>
      <a-entity position="0 -0.8 3.8">
        <a-camera>
          <a-cursor
            color="white"
            geometry="primitive: ring; radiusOuter: 0.03; radiusInner: 0.02"
            listener>
            <a-animation
                begin="click"
                easing="ease-in"
                attribute="scale"
                from="1 1 1"
                to="1000 1000 1000"
                dur="1000">
            </a-animation>
          </a-cursor>
        </a-camera>
      </a-entity>
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
      welcomeWebsite: this.$t('entryView.welcomeWebsite'),
      entryHint: this.$t('entryView.entryHint')
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
            this.cnvs = this.draw.canvas
            const columns = this.cnvs.width / fontSize
            this.drops = []
            for (let x = 0; x < columns; x++) {
              this.drops[x] = 1
            }
            this.ctx = this.draw.ctx
          },

          tick () {
            this.ctx.fillStyle = 'rgba(0,0,0,0.05)'
            this.ctx.fillRect(0, 0, this.cnvs.width, this.cnvs.height)
            this.ctx.fillStyle = '#0F0'
            this.ctx.font = `${fontSize} px helvetica`
            for (let i = 0; i < this.drops.length; i++) {
              const txt = chars[Math.floor(Math.random() * chars.length)]
              this.ctx.fillText(txt, i * fontSize, this.drops[i] * fontSize)
              if (this.drops[i] * fontSize > this.cnvs.height &&
                Math.random() > 0.975) {
                this.drops[i] = 0
              }
              this.drops[i] = this.drops[i] + 1
            }
            this.draw.render()
          }
        })
      }

      const self = this
      if (typeof (AFRAME.components.listener) === 'undefined') {
        AFRAME.registerComponent('listener', {
          init () {
            this.el.addEventListener('click', evt => {
              setTimeout(() => {
                self.$emit('shouldShowEntryView', false)
                // self.setIsEntryView(false)
                // self.$router.push('/home')
              }, 500)
            })
          }
        })
      }
    }
  },

  beforeMount () {
    this.initMatrixView()
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

#entry-view {
}
</style>
