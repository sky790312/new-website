<template>
  <div
    class="i-typing-text">
    <p
      :class="['text', color]">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ITypingText',

  props: {
    text: {
      type: String,
      default () {
        return ''
      }
    },

    color: {
      type: String,
      default () {
        return 'white'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

$mobileBreakPoint = 768px
$white = #fff

.i-typing-text {
  .text {
    overflow: hidden
    border-right: .15em solid $white
    white-space: nowrap
    width: 0
    margin: 0 auto
    padding-right: 5px
    letter-spacing: 0
    animation: typing 2.8s steps(30, end) forwards, blink-caret 1.15s step-end infinite forwards

    @media screen and (min-width: $mobileBreakPoint) {
      letter-spacing: .15em
    }

    &.white {
      color: $white
    }

    &.primary-color {

    }
  }

  @keyframes typing {
    from,
    50% {
      width: 0
      padding-right: 0
    }
    100% {
      width: 100%
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent
    }
    50% {
      border-color: $white
    }
  }
}

</style>
