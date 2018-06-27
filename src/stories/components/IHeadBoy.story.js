/* eslint-disable */
import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered';
import { withKnobs, boolean } from '@storybook/addon-knobs/vue';

import IHeadBoy from '@/components/IHeadBoy'

const stories = storiesOf('IHeadBoy')
stories.addDecorator(withKnobs)
stories.addDecorator(Centered)

stories
  .add('default', () => {
    const isActive = boolean('active: ', false)
    return {
      components: { IHeadBoy },
      template: `
        <i-head-boy
          :isActive="isActive">
        </i-head-boy>
      `,
      data () {
        return {
          isActive: isActive
        }
      }
    }
  }
)
