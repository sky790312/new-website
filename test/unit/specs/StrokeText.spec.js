import Vue from 'vue'
import StrokeText from '@/components/StrokeText'

const generateStrokeText = (text = '') => {
  const Constructor = Vue.extend(StrokeText)
  return new Constructor({
    propsData: {
      text: text
    }
  }).$mount()
}

describe('StrokeText', () => {
  it('should render correct number of dash', () => {
    const text = 'test'
    const vm = generateStrokeText(text)
    const strokeTexts = vm.$el.querySelectorAll('#stroke-text .text')
    expect(strokeTexts.length).to.equal(vm.dashCount)
  })

  it('should use props and rendor to capital text', () => {
    const text = 'test'
    const vm = generateStrokeText(text)
    const strokeText = vm.$el.querySelector('#stroke-text text')
    expect(strokeText.textContent.trim()).to.equal(text.toUpperCase())
  })
})
