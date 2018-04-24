/* eslint-disable */
import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered';
import { withKnobs, text } from '@storybook/addon-knobs/vue';

import StrokeDash from '../../components/StrokeDash.vue'

const stories = storiesOf('StrokeDash')
stories.addDecorator(withKnobs)
stories.addDecorator(Centered)

stories
  .add('default', () => {
    const strokeDashText = text('text', 'KevinHu')
    return {
      components: { StrokeDash },
      template: `
        <stroke-dash
          :text="strokeDashText">
        </stroke-dash>
      `,
      data () {
        return {
          strokeDashText: strokeDashText
        }
      }
    }
  }
)
