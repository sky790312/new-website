import Vue from 'vue'
import IStrokeDashText from '@/components/IStrokeDashText'

const generateStrokeDash = (text = '') => {
  const Constructor = Vue.extend(IStrokeDashText)
  return new Constructor({
    propsData: {
      text
    }
  }).$mount()
}

describe('IStrokeDashText', () => {
  it('should render correct number of dash', () => {
    const text = 'test'
    const vm = generateStrokeDash(text)
    const strokeDashTexts = vm.$el.querySelectorAll('.i-stroke-dash-text .text')
    expect(strokeDashTexts.length).to.equal(vm.dashCount)
  })

  it('should use props and rendor to capital text', () => {
    const text = 'test'
    const vm = generateStrokeDash(text)
    const strokeDashText = vm.$el.querySelector('.i-stroke-dash-text text')
    expect(strokeDashText.textContent.trim()).to.equal(text.toUpperCase())
  })
})
