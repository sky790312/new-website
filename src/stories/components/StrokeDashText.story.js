/* eslint-disable */
import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered';
import { withKnobs, text } from '@storybook/addon-knobs/vue';

import StrokeDashText from '../../components/StrokeDashText.vue'

const stories = storiesOf('StrokeDashText')
stories.addDecorator(withKnobs)
stories.addDecorator(Centered)

stories
  .add('default', () => {
    const strokeDashText = text('text', 'KevinHu')
    return {
      components: { StrokeDashText },
      template: `
        <stroke-dash-text
          :text="strokeDashText">
        </stroke-dash-text>
      `,
      data () {
        return {
          strokeDashText: strokeDashText
        }
      }
    }
  }
)
