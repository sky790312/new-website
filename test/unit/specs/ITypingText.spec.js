import Vue from 'vue'
import ITypingText from '@/components/ITypingText'

describe('ITypingText', () => {
  it('should use props and rendor to typing', () => {
    const text = 'test'
    const Constructor = Vue.extend(ITypingText)
    const vm = new Constructor({
      propsData: {
        text
      }
    }).$mount()
    const typingWord = vm.$el.querySelector('.i-typing-text .text')
    expect(typingWord.textContent.trim()).to.equal(text)
  })

  it('should use default white class to typing', () => {
    const Constructor = Vue.extend(ITypingText)
    const vm = new Constructor().$mount()
    const typingWord = vm.$el.querySelector('.i-typing-text .text')
    expect(typingWord.classList.contains('white')).to.equal(true)
  })

  it('should use props class to typing', () => {
    const text = 'test'
    const color = 'primary-color'
    const Constructor = Vue.extend(ITypingText)
    const vm = new Constructor({
      propsData: {
        text,
        color
      }
    }).$mount()
    const typingWord = vm.$el.querySelector('.i-typing-text .text')
    expect(typingWord.classList.contains(color)).to.equal(true)
  })
})
