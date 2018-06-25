import Vue from 'vue'
import IHeadBoy from '@/components/IHeadBoy'

const generateHeadBoy = () => {
  const Constructor = Vue.extend(IHeadBoy)
  return new Constructor().$mount()
}

describe('IHeadBoy', () => {
  it('should has head with eyes class', () => {
    const vm = generateHeadBoy()
    const head = vm.$el.childNodes[0]
    const eyes = head.childNodes[0]
    expect(Array.prototype.slice.call(head.classList)).to.include('head')
    expect(Array.prototype.slice.call(eyes.classList)).to.include('eyes')
  })

  it('should has feets class', () => {
    const vm = generateHeadBoy()
    const feets = vm.$el.childNodes[2]
    expect(Array.prototype.slice.call(feets.classList)).to.include('feets')
  })
})
