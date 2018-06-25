import Vue from 'vue'
import IStrokeDashText from '@/components/IStrokeDashText'

const generateStrokeDash = (text = '') => {
  const Constructor = Vue.extend(IStrokeDashText)
  return new Constructor({
    propsData: {
      text: text
    }
  }).$mount()
}

describe('IStrokeDashText', () => {
  it('should render correct number of dash', () => {
    const text = 'test'
    const vm = generateStrokeDash(text)
    const StrokeDashTexts = vm.$el.querySelectorAll('.i-stroke-dash-text .text')
    expect(StrokeDashTexts.length).to.equal(vm.dashCount)
  })

  it('should use props and rendor to capital text', () => {
    const text = 'test'
    const vm = generateStrokeDash(text)
    const StrokeDashText = vm.$el.querySelector('.i-stroke-dash-text text')
    expect(StrokeDashText.textContent.trim()).to.equal(text.toUpperCase())
  })
})
