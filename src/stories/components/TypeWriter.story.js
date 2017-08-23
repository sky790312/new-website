/* eslint-disable */
import { storiesOf } from '@storybook/vue'

import TypeWriter from '../../components/TypeWriter.vue'

storiesOf('TypeWriter', module)
  .add('default', () => ({
    components: { TypeWriter },
    template: `
      <div style="background: black; height: 100vh; width: 100vw; display: flex; justify-content: center; align-items: center;">
        <type-writer text="welcome to KevinHu\'s website !"></type-writer>
      </div>`
    // methods: { action: linkTo('Button') }
  })
)
