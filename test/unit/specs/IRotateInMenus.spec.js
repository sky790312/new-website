import Vue from 'vue'
import IRotateInMenus from '@/components/IRotateInMenus'

const generateIRotateInMenus = (menus = [], isActive = false) => {
  const Constructor = Vue.extend(IRotateInMenus)
  return new Constructor({
    propsData: {
      menus,
      isActive
    }
  }).$mount()
}

const completedObj = {
  name: 1,
  text: '1',
  status: 'completed',
  isActive: false
}

const pendingObj = {
  name: 2,
  text: '2',
  status: 'pending',
  isActive: false
}

const menus = [
  completedObj,
  pendingObj
]
describe('IRotateInMenus', () => {
  it('should render correct menu number', () => {
    const vm = generateIRotateInMenus(menus)
    const menuNumber = vm.$el.querySelectorAll('.menu').length
    expect(menuNumber).to.equal(menus.length)
  })

  it('should each menu has correct text and class from status', () => {
    const vm = generateIRotateInMenus(menus)
    const completedMenuIndex = menus.findIndex(menu => menu.status === 'completed')
    const completedMenu = vm.$el.querySelectorAll('.menu')[completedMenuIndex]
    expect(completedMenu.querySelector('.menu-title').textContent.trim()).to.equal(completedObj.text)
    expect(completedMenu.querySelector('.menu-title').classList.contains(completedObj.status)).to.equal(true)
    const pendingMenuIndex = menus.findIndex(menu => menu.status === 'pending')
    const pendingMenu = vm.$el.querySelectorAll('.menu')[pendingMenuIndex]
    expect(pendingMenu.querySelector('.menu-title').textContent.trim()).to.equal(pendingObj.text)
    expect(pendingMenu.querySelector('.menu-title').classList.contains(pendingObj.status)).to.equal(true)
  })

  it('should menus has active class when receive active props', () => {
    const isActive = true
    const vm = generateIRotateInMenus(menus, isActive)
    const menus = vm.$el.querySelector('.menus')
    expect(menus.classList.contains('active')).to.equal(true)
  })
})
