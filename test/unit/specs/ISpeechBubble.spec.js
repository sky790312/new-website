import Vue from 'vue'
import ISpeechBubble from '@/components/ISpeechBubble'

describe('ISpeechBubble', () => {
  it('should use props rendor text and width', () => {
    const text = 'test'
    const width = '100px'
    const Constructor = Vue.extend(ISpeechBubble)
    const vm = new Constructor({
      propsData: {
        text,
        width
      }
    }).$mount()
    const speechText = vm.$el.querySelector('.text')
    expect(speechText.textContent.trim()).to.equal(text)
    expect(speechText.style.width).to.equal(width)
  })

  it(`should speechPointTo be default value 'right-bottom' if not set`, () => {
    const defaultSpeechPointTo = 'right-bottom'
    const Constructor = Vue.extend(ISpeechBubble)
    const vm = new Constructor({
      propsData: {}
    }).$mount()
    const speechBubble = vm.$el
    expect(speechBubble.classList.contains(defaultSpeechPointTo)).to.equal(true)
  })

  it(`should speechPointTo be default value 'right-bottom' if not match:`, () => {
    const speechPointTo = 'abc'
    const defaultSpeechPointTo = 'right-bottom'
    const Constructor = Vue.extend(ISpeechBubble)
    const vm = new Constructor({
      propsData: {
        speechPointTo
      }
    }).$mount()
    const speechBubble = vm.$el
    expect(speechBubble.classList.contains(speechPointTo)).to.equal(false)
    expect(speechBubble.classList.contains(defaultSpeechPointTo)).to.equal(true)
  })

  it(`should speechPointTo be set if match:`, () => {
    const speechPointTo = 'right-bottom'
    const Constructor = Vue.extend(ISpeechBubble)
    const vm = new Constructor({
      propsData: {
        speechPointTo
      }
    }).$mount()
    const speechBubble = vm.$el
    expect(speechBubble.classList.contains(speechPointTo)).to.equal(true)
  })
})
