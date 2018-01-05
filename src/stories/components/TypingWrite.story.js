/* eslint-disable */
import { storiesOf } from '@storybook/vue'

import TypingWrite from '../../components/TypingWrite.vue'

storiesOf('TypingWrite', module)
  .add('default', () => ({
    components: { TypingWrite },
    template: `
      <div>
        <input
          type="text"
          v-model="typingWriteText">
        <select
          v-model="typingWriteColor">
          <option
            value="#fff">
            white
          </option>
        </select>
        <button
          @click="refresh">
          refresh
        </button>
        <div
          class="container">
          <typing-write
            v-if="shouldShow"
            :text="typingWriteText"
            :color="typingWriteColor">
          </typing-write>
        </div>
      </div>
    `,
    data () {
      return {
        typingWriteText: 'Welcome to my website, enjoy and have fun!',
        typingWriteColor: '#fff',
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
