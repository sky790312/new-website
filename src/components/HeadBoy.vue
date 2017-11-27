<template>
  <div id="head-boy">
    <div class="head">
      <div class="eyes"></div>
    </div>
    <div class="feets"></div>
  </div>
</template>

<script>
export default {
  name: 'headBoy'
}
</script>

<style lang="stylus" scoped>

$dark-gray = #444
$light-gray = #bbb

$head-boy-color = $light-gray
$head-boy-eyes-color = $dark-gray
$head-boy-feets-color = $dark-gray

#head-boy {
  z-index: 1
  height: 85px
  /*animation: opacity-fadein .5s*/
}

.head {
  position: relative
  width: 85px
  height: 85px
  border-radius: 50%
  background-color: $head-boy-color
  animation: head 1.2s infinite
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
    background-color: $head-boy-feets-color
  }
  &:before {
    left: 25px
    z-index: 1
    animation: feets-left 1.2s infinite
  }
  &:after {
    left: 45px
    z-index: -1
    animation: feets-right 1.2s infinite
  }
}

.eyes {
  position: absolute
  top: 35px
  left: 30px
  width: 6px
  height: 6px
  border-radius: 50%
  background-color: $head-boy-eyes-color
  box-shadow: 20px 0 0 $head-boy-eyes-color
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
