/* eslint-disable */
import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered';
import { withKnobs, boolean } from '@storybook/addon-knobs/vue';

import IModal from '@/components/IModal'

const stories = storiesOf('IModal')
stories.addDecorator(withKnobs)
stories.addDecorator(Centered)

stories
  .add('default', () => {
    let shouldShow = boolean('active: ', true)
    const canCloseByEsc = boolean('canCloseByEsc: ', true)
    const canCloseByBackground = boolean('canCloseByBackground: ', true)
    const hasCloseButton = boolean('hasCloseButton: ', true)
    return {
      components: { IModal },
      template: `
        <i-modal
          v-if="shouldShow"
          :canCloseByEsc="canCloseByEsc"
          :canCloseByBackground="canCloseByBackground"
          :hasCloseButton="hasCloseButton"
          @closeModal="closeModal">
        </i-modal>
      `,
      data () {
        return {
          shouldShow,
          canCloseByEsc,
          canCloseByBackground,
          hasCloseButton
        }
      },
      methods: {
        closeModal () {
          this.shouldShow = false
          shouldShow = boolean('active: ', false)
        }
      }
    }
  }
)
