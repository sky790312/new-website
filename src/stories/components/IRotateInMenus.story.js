/* eslint-disable */
import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered';
import { withKnobs, boolean, array, object } from '@storybook/addon-knobs/vue';

import IRotateInMenus from '@/components/IRotateInMenus'

const stories = storiesOf('IRotateInMenus')
stories.addDecorator(withKnobs)
stories.addDecorator(Centered)

stories
  .add('default', () => {
    // const isActive = boolean('active: ', false)
    const menu1 = object('1', {
      name: 1,
      text: '1',
      status: 'completed'
    }, 'menus-group')
    const menu2 = object('2', {
      name: 2,
      text: '2',
      status: 'completed'
    }, 'menus-group')
    const menu3 = object('3', {
      name: 3,
      text: '3',
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
    // const menus = array('menus: ', menusData)
    return {
      components: { IRotateInMenus },
      template: `
      <div>
        <p>menu-major</p>
        active: <input v-model="isActive" type="checkbox">
        <i-rotate-in-menus
          :isActive="isActive"
          :menus="menus">
        </i-rotate-in-menus>
      </div>
      `,
      data () {
        return {
          isActive: false,
          menus: menus
        }
      }
    }
  }
)
