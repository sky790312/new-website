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
  name: 'entryPlane',

  data () {
    return {
      plane: {
        position: '0 -2 -1',
        rotation: '-77.5 0 0',
        width: 5,
        height: 5,
        color: '#f8f8f8',
        animation: {
          attribute: 'rotation',
          from: '-90 0 0',
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
