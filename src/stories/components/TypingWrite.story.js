/* eslint-disable */
import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered';
import { withKnobs, text, select } from '@storybook/addon-knobs/vue';

import TypingWrite from '../../components/TypingWrite.vue'

const stories = storiesOf('TypingWrite')
stories.addDecorator(withKnobs)
stories.addDecorator(Centered)

stories
  .add('default', () => {
    const typingWriteText = text('text', 'Welcome to my website, enjoy and have fun!')
    const colors = {
      white: '#fff'
    }
    const typingWriteColor = select('color', colors, 'white');
    return {
      components: { TypingWrite },
      template: `
        <typing-write
          :text="typingWriteText"
          :color="typingWriteColor">
        </typing-write>
      `,
      data () {
        return {
          typingWriteText: typingWriteText,
          typingWriteColor: typingWriteColor
        }
      }
    }
  }
)
