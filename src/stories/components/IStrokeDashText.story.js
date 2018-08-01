/* eslint-disable */
import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered';
import { withKnobs, text } from '@storybook/addon-knobs/vue';

import IStrokeDashText from '@/components/IStrokeDashText'

const stories = storiesOf('IStrokeDashText')
stories.addDecorator(withKnobs)
stories.addDecorator(Centered)

stories
  .add('default', () => {
    const strokeDashText = text('text', 'KevinHu')
    return {
      components: { IStrokeDashText },
      template: `
        <i-stroke-dash-text
          :text="strokeDashText">
        </i-stroke-dash-text>
      `,
      data () {
        return {
          strokeDashText
        }
      }
    }
  }
)
