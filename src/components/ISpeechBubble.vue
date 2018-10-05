<template>
  <div
    :class="['i-speech-bubble', pointTo]"
    :style="centerPosition">
    <div
      class="text"
      :style="{width}">
      {{ text }}
    </div>
  </div>
</template>

<script>

const defaultPosition = {
  top: 'unset',
  right: 'unset',
  bottom: 'unset',
  left: 'unset'
}

export default {
  name: 'ISpeechBubble',

  props: {
    disabledHover: {
      type: Boolean,
      default () {
        return false
      }
    },

    speechPointTo: {
      type: String,
      default () {
        return 'right-bottom'
      }
    },

    text: {
      type: String,
      default () {
        return ''
      }
    },

    width: {
      type: String,
      default () {
        return ''
      }
    }
  },

  data () {
    return {
      targetEl: {},
      centerPosition: defaultPosition
    }
  },

  mounted () {
    this.targetEl = this.$parent.$el
    this.centerPosition = this.getCenterPosition(this.pointTo)

    if (this.targetEl && !this.disabledHover) {
      this.targetEl.addEventListener('mouseenter', this.show, false)
      this.targetEl.addEventListener('mouseleave', this.hide, false)
    }
  },

  beforeDestroy () {
    if (this.targetEl && !this.disabledHover) {
      this.targetEl.removeEventListener('mouseenter', this.show)
      this.targetEl.removeEventListener('mouseleave', this.hide)
    }
  },

  computed: {
    pointTo () {
      let pointTo = ''
      switch (this.speechPointTo) {
        case 'right-bottom':
          pointTo = 'right-bottom'
          break
        default:
          pointTo = 'right-bottom'
          break
      }
      return pointTo
    }
  },

  methods: {
    show () {
      this.$emit('onMouseEnter')
    },

    hide () {
      this.$emit('onMouseLeave')
    },

    getCenterPosition (type) {
      const position = defaultPosition
      if (type === 'right-bottom') {
        position.top = `-90px`
        position.right = `${(this.targetEl.clientWidth / 2) - 15}px`
      }
      return position
    }
  }
}
</script>

<style lang="stylus" scoped>

$mobileBreakPoint = 768px
$white = #fff
$black = #000

.i-speech-bubble {
  position: absolute
  border: 1px solid $white
  border-radius: 5px
  padding: 20px
  color: $white
  box-shadow: rgba($black, 0.7) 0px 0px 10px 5px

  &::before, &::after {
    content: ''
    position: absolute
    width: 0
    height: 0
    border-left: 10px solid transparent
    border-bottom: 10px solid transparent
  }

  &::before {
    right: 13px
    bottom: -21px
    border-right: 10px solid $white
    border-top: 10px solid $white
  }

  &::after {
    right: 15px
    bottom: -17px
    border-right: 10px solid $black
    border-top: 10px solid $black
  }
}

.text {
  overflow:hidden
  text-overflow: ellipsis
  width: 70vw
  white-space: normal

  @media screen and (min-width: $mobileBreakPoint) {
    width: auto
    white-space: nowrap
  }
}
</style>
