/* eslint-disable */
import { storiesOf } from '@storybook/vue'

import TypeWriter from '../../components/TypeWriter.vue'

storiesOf('TypeWriter', module)
  .add('default', () => ({
    components: { TypeWriter },
    template: `
      <div style="background: black; height: 100vh; padding: 20px;">
        <input type="text" v-model="text">
        <button @click="refresh">refresh</button>
        <div style="height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column;">
          <type-writer
            v-if="shouldShow"
            :text="text">
          </type-writer>
        </div>
      </div>
    `,
    data () {
      return {
        text: 'Welcome to my website, enjoy and have fun!',
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
