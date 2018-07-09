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
describe('IRotateInMenus', () => {
  it('should render correct menu number', () => {
    const vm = generateIRotateInMenus(menus)
    const menuNumber = vm.$el.querySelectorAll('.menu-item').length
    expect(menuNumber).to.equal(menus.length)
  })

  it('should each menu has correct text and class from status', () => {
    const vm = generateIRotateInMenus(menus)
    const completedMenu = vm.$el.querySelectorAll('.menu-item')[0]
    expect(completedMenu.querySelector('.menu-text').textContent.trim()).to.equal(completedObj.text)
    expect(completedMenu.classList.contains(completedObj.status)).to.equal(true)
    const pendingMenu = vm.$el.querySelectorAll('.menu-item')[1]
    expect(pendingMenu.querySelector('.menu-text').textContent.trim()).to.equal(pendingObj.text)
    expect(pendingMenu.classList.contains(pendingObj.status)).to.equal(true)
  })

  it('should has active class when receive active props', () => {
    const isActive = true
    const vm = generateIRotateInMenus(menus, isActive)
    const menus = vm.$el.querySelector('.menus')
    console.log('menus: ', menus)
    expect(menus.classList.contains('active')).to.equal(true)
  })
})
