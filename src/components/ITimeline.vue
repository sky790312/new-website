<template>
  <div class="i-timeline">
    <div 
      class="item"
      v-for="item in items"
      :key="item.key"
      @mouseenter="onItemHover(item, true)"
      @mouseleave="onItemHover(item, false)">
      <slot
        :item="item">
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ITimeline',

  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },

  methods: {
    onItemHover (item, isHover) {
      this.$emit('onItemHover', item, isHover)
    }
  },

  beforeMount () {
    const htmlEl = document.documentElement
    const itemCount = this.items.length || 1
    htmlEl.style.setProperty('--i-item-count', itemCount)
  }
}
</script>

<style lang="stylus" scoped>

$item-circle-width = 50px
$white = #fff
$yellow = #f4f4c2

$mobile-break-point = 768px

.i-timeline {
  outline: 1px dashed rgba(red, 0)
  margin: 0 0 0 25px
  border-left: 2px solid $white

  @media screen and (min-width: $mobile-break-point) {
    display: flex
    border-left: none
    border-top: 2px solid $white
    padding-top: 20px
    margin: 40px 0 0 0
  }

  .item {
    display: flex
    justify-content flex-end
    flex-wrap: wrap
    outline: 1px dashed rgba(green, 0)
    padding-bottom: 40px
    margin: 0 0 0 -25px

    &::before {
      content: ''
      align-self: center
      width: $item-circle-width
      height: $item-circle-width
      background-color: $white
      border-radius: 50%
    }
    
    &:last-child {
      padding-bottom: 0
    }

    &:hover {
      &::before {
        background-color: $yellow
      }
    }

    @media screen and (min-width: $mobile-break-point) {
      width: calc(100% / var(--i-item-count))
      justify-content flex-start
      flex-direction: column
      padding: 0 20px
      margin: -50px 0 0 0
    }
  }
}

</style>
