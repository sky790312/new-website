<template>
  <a-plane
    :position="plane.position"
    :rotation="plane.rotation"
    :width="plane.width"
    :height="plane.height"
    :color="plane.color">
    <a-animation
      :attribute="plane.animation.attribute"
      :dur="plane.animation.duration"
      :to="plane.animation.to"
      :repeat="plane.animation.repeat"
      :easing="plane.animation.easing">
    </a-animation>
  </a-plane>
</template>

<script>

export default {
  name: 'EntryPlane',

  data () {
    return {
      plane: {
        position: '0 0 0',
        rotation: '-90 0 0',
        width: 4,
        height: 4,
        color: '#f8f8f8',
        animation: {
          attribute: 'rotation',
          to: '-90 0 360',
          repeat: 'indefinite',
          easing: 'linear',
          duration: 5000
        }
      }
    }
  }
}
</script>
