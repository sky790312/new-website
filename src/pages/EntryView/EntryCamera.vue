<template>
  <a-camera :position="camera.position">
    <a-cursor
      :color="cursor.color"
      :geometry="cursor.geometry"
      listener>
      <a-animation
        :begin="cursor.animation.begin"
        :easing="cursor.animation.easing"
        :attribute="cursor.animation.attribute"
        :from="cursor.animation.from"
        :to="cursor.animation.to"
        :dur="cursor.animation.duration">
      </a-animation>
    </a-cursor>
  </a-camera>
</template>

<script>

export default {
  name: 'entryCamera',

  data () {
    return {
      camera: {
        position: '0 -0.8 3.8'
      },
      cursor: {
        color: 'white',
        geometry: 'primitive: ring; radiusOuter: 0.03; radiusInner: 0.02',
        animation: {
          attribute: 'scale',
          begin: 'click',
          from: '1 1 1',
          to: '1000 1000 1000',
          easing: 'ease-in',
          duration: 1000
        }
      }
    }
  }
}
</script>
