<template>
  <div
    class="i-speech-bubble">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ISpeechBubble',

  props: {

  }
}
</script>

<style lang="stylus" scoped>

$white = #fff
$black = #000

.i-speech-bubble {
  position: relative
  min-width: 300px
  border: 1px solid $white
  padding: 20px
  // text-align: center;
  // font-weight: 900;
  color: $white
  // font-family: arial;

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
</style>
