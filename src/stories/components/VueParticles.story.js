/* eslint-disable */
import { storiesOf } from '@storybook/vue'

import Vue from 'vue'
import VueParticles from 'vue-particles'

storiesOf('Plugin', module)
  .add('vue-particles', () => ({
    template: `
      <div>
        <div
          class="absolute">
          defaultConfig: <pre>{{ defaultConfig }}</pre>
        </div>
        <vue-particles>
        </vue-particles>
      </div>
    `,
    data () {
      return {
        defaultConfig: {
          color: '#dedede',
          particleOpacity: 0.7,
          particlesNumber: 80,
          shapeType: "circle",
          particleSize: 4,
          linesColor: '#dedede',
          linesWidth: 1,
          lineLinked: true,
          lineOpacity: 0.4,
          linesDistance: 150,
          moveSpeed: 3,
          hoverEffect: true,
          hoverMode: 'grab',
          clickEffect: true,
          clickMode: 'push'
        },
      }
    },
    beforeMount() {
      Vue.use(VueParticles)
    }
  }))
