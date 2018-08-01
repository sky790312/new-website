/* eslint-disable */
import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered';
import { withKnobs, text } from '@storybook/addon-knobs/vue';

import ITag from '@/components/ITag'

const stories = storiesOf('ITag')
stories.addDecorator(withKnobs)
stories.addDecorator(Centered)

stories
  .add('default', () => {
    const tagText = text('text', 'testTag')
    return {
      components: { ITag },
      template: `
        <i-tag
          :text="tagText">
        </i-tag>
      `,
      data () {
        return {
          tagText
        }
      }
    }
  }
)
