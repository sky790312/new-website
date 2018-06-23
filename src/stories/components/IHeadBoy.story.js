/* eslint-disable */
import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered';

import IHeadBoy from '../../components/IHeadBoy.vue'

const stories = storiesOf('IHeadBoy')
stories.addDecorator(Centered)

stories
  .add('default', () => ({
    components: { IHeadBoy },
    template: `
      <i-head-boy>
      </i-head-boy>
    `
  })
)
