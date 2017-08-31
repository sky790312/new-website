/* eslint-disable */
import { storiesOf } from '@storybook/vue'

import HeadBoy from '../../components/HeadBoy.vue'

storiesOf('HeadBoy', module)
  .add('default', () => ({
    components: { HeadBoy },
    template: `
      <div style="background: black; height: 100vh; padding: 20px; display: flex; justify-content: center; align-items: center;">
        <head-boy></head-boy>
      </div>
    `
  })
)
