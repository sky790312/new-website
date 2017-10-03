import Vue from 'vue'
import HeadBoy from '@/components/HeadBoy'

describe('HeadBoy.vue', () => {
  it('should has head with eyes class', () => {
    const Constructor = Vue.extend(HeadBoy)
    const vm = new Constructor().$mount()
    const head = vm.$el.childNodes[0]
    const eyes = head.childNodes[0]
    expect(Array.prototype.slice.call(head.classList)).to.include('head')
    expect(Array.prototype.slice.call(eyes.classList)).to.include('eyes')
  })
  it('should has feets class', () => {
    const Constructor = Vue.extend(HeadBoy)
    const vm = new Constructor().$mount()
    const feets = vm.$el.childNodes[2]
    expect(Array.prototype.slice.call(feets.classList)).to.include('feets')
  })
})
