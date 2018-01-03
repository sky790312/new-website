import Vue from 'vue'
import HeadBoy from '@/components/StrokeText'

describe('StrokeText', () => {
  it('should render correct number of dash', () => {
    const Constructor = Vue.extend(HeadBoy)
    const text = 'test'
    const vm = new Constructor({
      propsData: {
        text: text
      }
    }).$mount()
    expect(vm.$el.querySelectorAll('#stroke-text .text').length).to.equal(vm.dashCount)
  })

  it('should use correct props to capital text', () => {
    const Constructor = Vue.extend(HeadBoy)
    const text = 'test'
    const vm = new Constructor({
      propsData: {
        text: text
      }
    }).$mount()
    expect(vm.$el.querySelector('#stroke-text text').textContent.trim()).to.equal(text.toUpperCase())
  })
})
