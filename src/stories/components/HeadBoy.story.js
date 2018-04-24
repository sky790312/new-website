/* eslint-disable */
import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered';

import HeadBoy from '../../components/HeadBoy.vue'

const stories = storiesOf('HeadBoy')
stories.addDecorator(Centered)

stories
  .add('default', () => ({
    components: { HeadBoy },
    template: `
      <head-boy>
      </head-boy>
    `
  })
)
