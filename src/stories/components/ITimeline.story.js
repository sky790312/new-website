/* eslint-disable */
import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/vue';

import ITimeline from '@/components/ITimeline'

const stories = storiesOf('ITimeline')
stories.addDecorator(withKnobs)
stories.addDecorator(Centered)

stories
  .add('default', () => {
    const item1 = object('1', {
      key: 1,
      text: 'item 1'
    }, 'items-group')
    const item2 = object('2', {
      key: 2,
      text: 'item 2'
    }, 'items-group')
    const item3 = object('3', {
      key: 3,
      text: 'item 3'
    }, 'items-group')
    const items = [item1, item2, item3]
    return {
      components: { ITimeline },
      template: `
        <div>
          <p>
            Pass array object(must has key parameter) to ITimeline component, and use scope-slot to get item's data.
          </p>
          <p>
            It will divide the width equally with each item and it's RWD with 768px breakpoint.
          </p>
          <p>
            (Looks like storybook still have bug to render slot-scope component.)
          </p>
          <i-timeline
            :items="items"
            @onItemHover="handleItemHover">
            <template
              slot-scope="{ item }">
              <p>
                {{item}}
              </p>
            </template>
          </i-timeline>
        </div>
      `,
      data () {
        return {
          items
        }
      },
      methods: { 
        handleItemHover: action('hover item: ')
      }
    }
  }
)
