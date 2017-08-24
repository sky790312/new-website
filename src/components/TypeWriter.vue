<template>
  <div id="type-writer">
    <p :class="color">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'TypeWriter',
  data () {
    return {
    }
  },
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
@import '../styles/variables'

#type-writer {
  p {
    overflow: hidden
    border-right: .15em solid $white
    white-space: nowrap
    width: 0
    /*margin: 0 auto*/
    padding-right: 5px
    letter-spacing: .15em
    animation: typing 2.8s steps(30, end), blink-caret 1.15s step-end infinite
    animation-fill-mode: forwards
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
    to { border-color: transparent }
    50% { border-color: $white }
  }
}

</style>
