<template>
  <div
    class="i-head-boy"
    @click="onIHeadBoyClick()">
    <div
      :class="['head', {moving: isActive}]">
      <div
        class="eyes">
      </div>
    </div>
    <div
      :class="['feets', {moving: isActive}]">
    </div>
  </div>
</template>

<script>
export default {
  name: 'IHeadBoy',

  props: {
    isActive: {
      type: Boolean,
      default () {
        return false
      }
    }
  },

  methods: {
    onIHeadBoyClick () {
      this.$emit('onIHeadBoyClick')
    }
  }
}
</script>

<style lang="stylus" scoped>

$dark-gray = #444
$light-gray = #bbb

$i-head-boy-color = $light-gray
$i-head-boy-eyes-color = $dark-gray
$i-head-boy-feets-color = $dark-gray

.i-head-boy {
  height: 85px
  width: 85px
}

.head {
  position: relative
  width: 85px
  height: 85px
  border-radius: 50%
  background-color: $i-head-boy-color

  &:after {
    content: 'Click me back!'
    position: absolute
    top: 105px
    left: -15px
    width: 120px
    color: $light-gray
    font-size: 18px
  }

  &.moving {
    animation: head 1.2s infinite
  }
}

.feets {
  position: relative
  top: -10px

  &:before, &:after {
    content: ''
    position: absolute
    width: 20px
    height: 20px
    border-radius: 50%
    background-color: $i-head-boy-feets-color
  }

  &:before {
    left: 25px
    z-index: -1
  }

  &:after {
    left: 45px
    z-index: -1
  }

  &.moving {
    &:before {
      animation: feets-left 1.2s infinite
      z-index: 1
    }
    &:after {
      animation: feets-right 1.2s infinite
    }
  }
}

.eyes {
  position: absolute
  top: 35px
  left: 30px
  width: 6px
  height: 6px
  border-radius: 50%
  background-color: $i-head-boy-eyes-color
  box-shadow: 20px 0 0 $i-head-boy-eyes-color
  animation: eyes 2.5s infinite
}

@keyframes head {
  0% {
    top: 3px
  }
  50% {
    top: -3px
  }
}
@keyframes eyes {
  0% {
    opacity: 1
  }
  15% {
    opacity: 0
  }
  30% {
    opacity: 1
  }
  45% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}

@keyframes feets-left {
   0% {
     z-index: 1
   }
   50% {
     z-index: -1
   }
}

@keyframes feets-right {
   0% {
     z-index: -1
   }
   50% {
     z-index: 1
   }
}
</style>
