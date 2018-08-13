/* eslint-disable */
import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered';
import { withKnobs, array, object } from '@storybook/addon-knobs/vue';

import IRotateInMenus from '@/components/IRotateInMenus'

const stories = storiesOf('IRotateInMenus')
stories.addDecorator(withKnobs)
stories.addDecorator(Centered)

stories
  .add('default', () => {
    // const isActive = boolean('active: ', false)
    const menu1 = object('1', {
      name: 1,
      text: 'no status menu',
      status: ''
    }, 'menus-group')
    const menu2 = object('2', {
      name: 2,
      text: 'pending menu',
      status: 'pending'
    }, 'menus-group')
    const menu3 = object('3', {
      name: 3,
      text: 'complete menu',
      status: 'completed'
    }, 'menus-group')
    const menu4 = object('4', {
      name: 4,
      text: '4',
      status: 'completed'
    }, 'menus-group')
    const menu5 = object('5', {
      name: 5,
      text: '5',
      status: 'completed'
    }, 'menus-group')
    const menus = [menu1, menu2, menu3, menu4, menu5]
    const isActive = false
    return {
      components: { IRotateInMenus },
      template: `
      <div>
        <i-rotate-in-menus
          :isActive="isActive"
          :menus="menus">
          <div>
            <p>menu-major</p>
            active: <input v-model="isActive" type="checkbox">
          </div>
        </i-rotate-in-menus>
      </div>
      `,
      data () {
        return {
          isActive,
          menus
        }
      }
    }
  }
)
