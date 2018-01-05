<template>
  <svg
    id="stroke-dash"
    class="stroke-dash">
    <symbol id="svg-text">
      <text
        :text-anchor="textConfig.textAnchor"
        :x="textConfig.x"
        :y="textConfig.y"
        :dy="textConfig.dy">
        {{ capitalText }}
      </text>
    </symbol>
    <use
      v-for="dash in dashCount"
      xlink:href="#svg-text"
      class="text">
    </use>
  </svg>
</template>

<script>
export default {
  name: 'strokeDash',
  props: {
    text: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      dashCount: 5,
      textConfig: {
        textAnchor: 'middle',
        x: '50%',
        y: '50%',
        dy: '.35em'
      }
    }
  },
  computed: {
    capitalText () {
      return this.text.toUpperCase()
    }
  }
}
</script>

<style lang="stylus" scoped>

$dash-color-1 = #579FE3
$dash-color-2 = #00A3FA
$dash-color-3 = #4EAFFA
$dash-color-4 = #2471F2
$dash-color-5 = #3D72CA

.stroke-dash {
	opacity: 0
  cursor: default
	animation: opacity-fadein 2.2s ease forwards
}

#svg-text {
  text {
    font-size: 3em
    font-family: Open Sans, Impact
    letter-spacing: 4px
  }
}

.text {
  fill: none
  stroke-width: 2
  stroke-dasharray: 80 320
  stroke-dashoffset: 0
  animation: stroke 10s infinite linear

  &:nth-child(5n + 1) {
    stroke: $dash-color-1
    animation-delay: -2s
  }
  &:nth-child(5n + 2) {
    stroke: $dash-color-2
    animation-delay: -4s
  }

  &:nth-child(5n + 3) {
    stroke: $dash-color-3
    animation-delay: -6s
  }

  &:nth-child(5n + 4) {
    stroke: $dash-color-4
    animation-delay: -8s
  }

  &:nth-child(5n + 5) {
    stroke: $dash-color-5
    animation-delay: -10s
  }
}

@keyframes opacity-fadein {
   from {
     opacity: 0
   }
   to {
     opacity: 1
   }
}

@keyframes stroke {
  100% {
    stroke-dashoffset: -400
  }
}

</style>
