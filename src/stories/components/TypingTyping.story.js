/* eslint-disable */
import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered';
import { withKnobs, text, select } from '@storybook/addon-knobs/vue';

import TypingText from '../../components/TypingText.vue'

const stories = storiesOf('TypingText')
stories.addDecorator(withKnobs)
stories.addDecorator(Centered)

stories
  .add('default', () => {
    const TypingText = text('text', 'Welcome to my website, enjoy and have fun!')
    const colors = {
      white: '#fff'
    }
    const TypingTextColor = select('color', colors, 'white');
    return {
      components: { TypingText },
      template: `
        <typing-text
          :text="TypingText"
          :color="TypingTextColor">
        </typing-text>
      `,
      data () {
        return {
          TypingTextText: TypingTextText,
          TypingTextColor: TypingTextColor
        }
      }
    }
  }
)
