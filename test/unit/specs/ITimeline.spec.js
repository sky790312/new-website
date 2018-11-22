import Vue from 'vue'
import ITimeline from '@/components/ITimeline'

const generateITimeline = (items = []) => {
  const Constructor = Vue.extend(ITimeline)
  return new Constructor({
    propsData: {
      items
    }
  }).$mount()
}

const items = [{
  key: 1,
  text: 'item 1'
}, {
  key: 2,
  text: 'item 2'
}, {
  key: 3,
  text: 'item 3'
}]

describe('ITimeline', () => {
  it('should render correct item number', () => {
    const vm = generateITimeline(items)
    const itemNumber = vm.$el.querySelectorAll('.item').length
    expect(itemNumber).to.equal(items.length)
  })
})
