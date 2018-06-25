/* eslint-disable */
import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered';
import { withKnobs, text, select } from '@storybook/addon-knobs/vue';

import ITypingText from '../../components/ITypingText.vue'

const stories = storiesOf('ITypingText')
stories.addDecorator(withKnobs)
stories.addDecorator(Centered)

stories
  .add('default', () => {
    const typingText = text('text', 'Welcome to my website, enjoy and have fun!')
    const colors = {
      white: '#fff'
    }
    const typingTextColor = select('color', colors, 'white');
    return {
      components: { ITypingText },
      template: `
        <i-typing-text
          :text="typingText"
          :color="typingTextColor">
        </i-typing-text>
      `,
      data () {
        return {
          typingText: typingText,
          typingTextColor: typingTextColor
        }
      }
    }
  }
)
