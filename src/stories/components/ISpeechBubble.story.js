/* eslint-disable */
import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/vue';

import ISpeechBubble from '@/components/ISpeechBubble'

const stories = storiesOf('ISpeechBubble')
stories.addDecorator(withKnobs)
stories.addDecorator(Centered)

stories
  .add('default', () => {
    let shouldShow = boolean('shouldShow: ', false)
    const disabledHover = boolean('disabledHover: ', false)
    const speechBubbleText = text('text', `speech bubble will get its parent's position and centered`)
    return {
      components: { ISpeechBubble },
      template: `
        <div style="position: relative;">
          target inside parent
          <i-speech-bubble
            v-show="shouldShow"
            :text="speechBubbleText"
            :disabledHover="disabledHover"
            @onMouseEnter="onSpeechBubbleEnter"
            @onMouseLeave="onSpeechBubbleLeave">
          </i-speech-bubble>
        </div>
      `,
      data () {
        return {
          shouldShow,
          disabledHover,
          speechBubbleText
        }
      },
      methods: {
        onSpeechBubbleEnter () {
          this.shouldShow = true
          shouldShow = boolean('shouldShow: ', true)
        },

        onSpeechBubbleLeave () {
          this.shouldShow = false
          shouldShow = boolean('shouldShow: ', false)
        }
      }
    }
  }
)
