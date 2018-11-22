/* eslint-disable */
import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/vue';

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
      status: '',
      isActive: false
    }, 'menus-group')
    const menu2 = object('2', {
      name: 2,
      text: 'pending menu',
      status: 'pending',
      isActive: false
    }, 'menus-group')
    const menu3 = object('3', {
      name: 3,
      text: 'complete menu',
      status: 'completed',
      isActive: false
    }, 'menus-group')
    const menu4 = object('4', {
      name: 4,
      text: '4',
      status: 'completed',
      isActive: false
    }, 'menus-group')
    const menu5 = object('5', {
      name: 5,
      text: '5',
      status: 'completed',
      isActive: false
    }, 'menus-group')
    const menus = [menu1, menu2, menu3, menu4, menu5]
    const isActive = false
    return {
      components: { IRotateInMenus },
      template: `
      <div>
        <i-rotate-in-menus
          :isActive="isActive"
          :useI18n="false"
          :menus="menus"
          @onIRotateInMenusClick="handleIRotateInMenusClick">
          <div>
            <p>menu-major</p>
            active: <input v-model="isActive" type="checkbox">
          </div>
        </i-rotate-in-menus>
        <p style="position: absolute;">
          Can only use 5 menus now, use i18n or not.
        </p>
      </div>
      `,
      data () {
        return {
          isActive,
          menus
        }
      },
      methods: { 
        handleIRotateInMenusClick (menu) {
          const foundMenu = menus.find(rotateInMenu => rotateInMenu.name === menu.name)
          foundMenu.isActive = !foundMenu.isActive
          action('click menu: ')(menu)
        }
      }
    }
  }
)
