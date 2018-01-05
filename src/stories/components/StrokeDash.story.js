/* eslint-disable */
import { storiesOf } from '@storybook/vue'

import strokeDash from '../../components/StrokeDash.vue'

storiesOf('strokeDash', module)
  .add('default', () => ({
    components: { strokeDash },
    template: `
      <div>
        <input type="text" v-model="strokeDashText">
        <button @click="refresh">refresh</button>
        <div class="container">
          <stroke-dash
            v-if="shouldShow"
            :text="strokeDashText">
          </stroke-dash>
        </div>
      </div>
    `,
    data () {
      return {
        strokeDashText: 'KevinHu',
        shouldShow: true
      }
    },
    methods: {
      refresh () {
        this.shouldShow = false
        setTimeout(() => {
          this.shouldShow = true
        }, 100)
      }
    }
  })
)
