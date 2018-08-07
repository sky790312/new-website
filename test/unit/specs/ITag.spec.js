import Vue from 'vue'
import ITag from '@/components/ITag'

const generateITag = (text = '') => {
  const Constructor = Vue.extend(ITag)
  return new Constructor({
    propsData: {
      text
    }
  }).$mount()
}

describe('ITag', () => {
  it('should use props rendor text', () => {
    const text = 'test'
    const vm = generateITag(text)
    const tag = vm.$el
    expect(tag.textContent.trim()).to.equal(text)
  })
})
