import Vue from 'vue'
import StrokeDash from '@/components/StrokeDash'

const generateStrokeDash = (text = '') => {
  const Constructor = Vue.extend(StrokeDash)
  return new Constructor({
    propsData: {
      text: text
    }
  }).$mount()
}

describe('StrokeDash', () => {
  it('should render correct number of dash', () => {
    const text = 'test'
    const vm = generateStrokeDash(text)
    const StrokeDashs = vm.$el.querySelectorAll('.stroke-dash-text .text')
    expect(StrokeDashs.length).to.equal(vm.dashCount)
  })

  it('should use props and rendor to capital text', () => {
    const text = 'test'
    const vm = generateStrokeDash(text)
    const StrokeDash = vm.$el.querySelector('.stroke-dash-text text')
    expect(StrokeDash.textContent.trim()).to.equal(text.toUpperCase())
  })
})
