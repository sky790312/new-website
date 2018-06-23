import Vue from 'vue'
import TypingWrite from '@/components/TypingWrite'

const generateTypingWrite = (text = '', color = '') => {
  const Constructor = Vue.extend(TypingWrite)
  return new Constructor({
    propsData: {
      text: text,
      color: color
    }
  }).$mount()
}

describe('TypingWrite', () => {
  it('should use props and rendor to typing', () => {
    const text = 'test'
    const vm = generateTypingWrite(text)
    const typingWord = vm.$el.querySelector('.i-typing-text .typing-word')
    expect(typingWord.textContent.trim()).to.equal(text)
  })

  it('should use default white class to typing', () => {
    const text = 'test'
    const color = 'white'
    const vm = generateTypingWrite(text, color)
    const typingWord = vm.$el.querySelector('.i-typing-text .typing-word')
    expect(Array.prototype.slice.call(typingWord.classList)).to.include(color)
  })

  it('should use props class to typing', () => {
    const text = 'test'
    const color = 'primary-color'
    const vm = generateTypingWrite(text, color)
    const typingWord = vm.$el.querySelector('.i-typing-text .typing-word')
    expect(Array.prototype.slice.call(typingWord.classList)).to.include(color)
  })
})
