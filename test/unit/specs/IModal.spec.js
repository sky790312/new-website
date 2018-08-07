import Vue from 'vue'
import IModal from '@/components/IModal'

describe('IModal', () => {
  it('should use props rendor width', () => {
    const width = '100px'
    const Constructor = Vue.extend(IModal)
    const vm = new Constructor({
      propsData: {
        width
      }
    }).$mount()
    const modalContainer = vm.$el.querySelector('.modal-container')
    expect(modalContainer.style.width).to.equal(width)
  })

  it(`should has default close button`, () => {
    const Constructor = Vue.extend(IModal)
    const vm = new Constructor({
      propsData: {}
    }).$mount()
    const modalClose = vm.$el.querySelector('.modal-close')
    expect(vm.$el.contains(modalClose)).to.equal(true)
  })

  it(`should close button be set by 'hasCloseButton'`, () => {
    let hasCloseButton = true
    const Constructor = Vue.extend(IModal)
    const vm1 = new Constructor({
      propsData: {
        hasCloseButton
      }
    }).$mount()
    let modalClose = vm1.$el.querySelector('.modal-close')
    expect(modalClose).to.exist

    hasCloseButton = false
    const vm2 = new Constructor({
      propsData: {
        hasCloseButton
      }
    }).$mount()
    modalClose = vm2.$el.querySelector('.modal-close')
    expect(modalClose).to.not.exist
  })
})
