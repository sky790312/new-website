import Vue from 'vue'
import IRotateInMenus from '@/components/IRotateInMenus'

const generateIRotateInMenus = (menus = []) => {
  const Constructor = Vue.extend(IRotateInMenus)
  return new Constructor({
    propsData: {
      isActive: true,
      menus: menus
    }
  }).$mount()
}

describe('IRotateInMenus', () => {
  it('should render correct menu number', () => {
    const compltedState = 'completed'
    const pendingState = 'pending'
    const menus = [{
      name: 1,
      text: '1',
      status: compltedState
    }, {
      name: 2,
      text: '2',
      status: pendingState
    }]
    const vm = generateIRotateInMenus(menus)
    const menuNumber = vm.$el.querySelectorAll('.i-rotate-in-menus .menu').length
    expect(menuNumber).to.equal(menus.length)
  })

  it('should each menu has correct text and class from status', () => {
    const completedObj = {
      name: 1,
      text: '1',
      status: 'completed'
    }
    const pendingObj = {
      name: 2,
      text: '2',
      status: 'pending'
    }
    const menus = [
      completedObj,
      pendingObj
    ]
    const vm = generateIRotateInMenus(menus)
    const completedMenu = vm.$el.querySelectorAll('.i-rotate-in-menus .menu')[0]
    expect(completedMenu.querySelector('.menu-text').textContent.trim()).to.equal(completedObj.text)
    expect(completedMenu.classList.contains(completedObj.status)).to.equal(true)
    const pendingMenu = vm.$el.querySelectorAll('.i-rotate-in-menus .menu')[1]
    expect(pendingMenu.querySelector('.menu-text').textContent.trim()).to.equal(pendingObj.text)
    expect(pendingMenu.classList.contains(pendingObj.status)).to.equal(true)
  })
})
