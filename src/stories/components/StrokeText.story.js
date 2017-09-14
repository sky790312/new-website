/* eslint-disable */
import { storiesOf } from '@storybook/vue'

import StrokeText from '../../components/StrokeText.vue'

storiesOf('StrokeText', module)
  .add('default', () => ({
    components: { StrokeText },
    template: `
      <div>
        <input type="text" v-model="text">
        <button @click="refresh">refresh</button>
        <div class="container">
          <stroke-text
            v-if="shouldShow"
            :text="text">
          </stroke-text>
        </div>
      </div>
    `,
    data () {
      return {
        text: 'KevinHu',
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
