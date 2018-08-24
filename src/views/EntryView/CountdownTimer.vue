<template>
  <div class="countdown-timer counter-container">
    <span class="counter-number five">5</span>
    <span class="counter-number four">4</span>
    <span class="counter-number three">3</span>
    <span class="counter-number two">2</span>
    <span class="counter-number one">1</span>
  </div>
</template>

<script>

export default {
  name: 'countdownTimer'
}
</script>

<style lang="stylus" scoped>
@import '~styl/variables'

.counter-container {
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  display: flex
  align-items center
  justify-content center
  opacity: .7
  z-index 1
  font-size: 10em
  background-color: $black
}

.counter-number {
  position: absolute
  opacity: 0    
  color: #0F0
  
  &.five {
    animation: scale-fade-in 1.2s ease 0s 1 normal
  }

  &.four {
    animation: scale-fade-in 1.2s ease 1.2s 1 normal
  }

  &.three {
    animation: scale-fade-in 1.2s ease 2.4s 1 normal
  }

  &.two {
    animation: scale-fade-in 1.2s ease 3.6s 1 normal
  }

  &.one {
    animation: scale-fade-in 1.2s ease 4.8s 1 normal
  }
    
  @keyframes scale-fade-in {
    from {
      transform: scale(0.5)
      opacity: 0
    }
    to {
      transform: scale(1.3)
      opacity: 1
    }
  }
}
</style>
