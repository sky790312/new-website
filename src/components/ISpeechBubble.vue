<template>
  <div
    class="i-speech-bubble right-bottom">
    <div
      class="speech-text"
      :style="{width}">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ISpeechBubble',

  props: {
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
  }
}
</script>

<style lang="stylus" scoped>

$mobileBreakPoint = 768px
$white = #fff
$black = #000

.i-speech-bubble {
  position: relative
  border: 1px solid $white
  border-radius: 5px
  padding: 20px
  color: $white

  &.right-bottom {
    position: absolute
    top: -90px
    right: 27px
  }

  &:before {
    content: ''
    position: absolute
    right: 13px
    bottom: -21px
    width: 0
    height: 0
    border-left: 10px solid transparent
    border-right: 10px solid $white
    border-top: 10px solid $white
    border-bottom: 10px solid transparent
  }

  &:after {
    content: ''
    position: absolute
    right: 15px
    bottom: -17px
    width: 0
    height: 0
    border-left: 10px solid transparent
    border-right: 10px solid $black
    border-top: 10px solid $black
    border-bottom: 10px solid transparent
  }
}

.speech-text {
  white-space: nowrap
  overflow:hidden
  text-overflow: ellipsis
}
</style>
