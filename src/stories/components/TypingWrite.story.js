/* eslint-disable */
import { storiesOf } from '@storybook/vue'

import TypingWrite from '../../components/TypingWrite.vue'

storiesOf('TypingWrite', module)
  .add('default', () => ({
    components: { TypingWrite },
    template: `
      <div>
        <input type="text" v-model="text">
        <button @click="refresh">refresh</button>
        <div class="container">
          <typing-write
            v-if="shouldShow"
            :text="text">
          </typing-write>
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
