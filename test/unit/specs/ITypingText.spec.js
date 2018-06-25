import Vue from 'vue'
import ITypingText from '@/components/ITypingText'

const generateITypingText = (text = '', color = '') => {
  const Constructor = Vue.extend(ITypingText)
  return new Constructor({
    propsData: {
      text: text,
      color: color
    }
  }).$mount()
}

describe('ITypingText', () => {
  it('should use props and rendor to typing', () => {
    const text = 'test'
    const vm = generateITypingText(text)
    const typingWord = vm.$el.querySelector('.i-typing-text .text')
    expect(typingWord.textContent.trim()).to.equal(text)
  })

  it('should use default white class to typing', () => {
    const text = 'test'
    const color = 'white'
    const vm = generateITypingText(text, color)
    const typingWord = vm.$el.querySelector('.i-typing-text .text')
    expect(Array.prototype.slice.call(typingWord.classList)).to.include(color)
  })

  it('should use props class to typing', () => {
    const text = 'test'
    const color = 'primary-color'
    const vm = generateITypingText(text, color)
    const typingWord = vm.$el.querySelector('.i-typing-text .text')
    expect(Array.prototype.slice.call(typingWord.classList)).to.include(color)
  })
})
