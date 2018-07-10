import Vue from 'vue'
import IHeadBoy from '@/components/IHeadBoy'

const generateHeadBoy = (isActive = false) => {
  const Constructor = Vue.extend(IHeadBoy)
  return new Constructor({
    propsData: {
      isActive
    }
  }).$mount()
}

describe('IHeadBoy', () => {
  it('should has head with eyes class', () => {
    const vm = generateHeadBoy()
    const head = vm.$el.childNodes[0]
    const eyes = head.childNodes[0]
    expect(head.classList.contains('head')).to.equal(true)
    expect(eyes.classList.contains('eyes')).to.equal(true)
  })

  it('should has feets class', () => {
    const vm = generateHeadBoy()
    const feets = vm.$el.childNodes[1]
    expect(feets.classList.contains('feets')).to.equal(true)
  })

  it('should has moving class when receive active props', () => {
    const isActive = true
    const vm = generateHeadBoy(isActive)
    const head = vm.$el.childNodes[0]
    expect(head.classList.contains('moving')).to.equal(true)
    const feets = vm.$el.childNodes[1]
    expect(feets.classList.contains('moving')).to.equal(true)
  })
})
