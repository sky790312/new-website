/* eslint-disable */
import { storiesOf } from '@storybook/vue'

import HeadBoy from '../../components/HeadBoy.vue'

storiesOf('HeadBoy', module)
  .add('default', () => ({
    components: { HeadBoy },
    template: `
      <div
        class="container">
        <head-boy>
        </head-boy>
      </div>
    `
  })
)
