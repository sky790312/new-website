<template>
  <ul
    :class="['i-rotate-in-menus', {'active': isActive}]">
    <li
      v-for="menu in menus"
      :key="menu.name"
      class="menu-container">
      <a
        @click="onIRotateInMenusClick(menu)"
        :class="['menu', menu.status]">
        <strong
          class="menu-text">
          {{ menu.text }}
        </strong>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'IRotateInMenus',

  props: {
    isActive: {
      type: Boolean,
      default () {
        return false
      }
    },

    menus: {
      type: Array,
      default () {
        return []
      }
    }
  },

  methods: {
    onIRotateInMenusClick (menu) {
      this.$emit('onIRotateInMenusClick', menu)
    }
  }
}
</script>

<style lang="stylus" scoped>

$white = #fff
$light-blue = #4380Be

$item-count = 5
$item-size = 70px
$item-color = $white
$item-background = $light-blue

for $i in (1..$item-count) {
  .i-rotate-in-menus {
    li:nth-child({$i}) a {
      transform: rotate(-180deg / ($item-count - 1) * ($i - 1))
    }
  }
}

.i-rotate-in-menus {
  visibility: hidden

  &.active {
    visibility: visible

    for $i in (1..$item-count) {
      li:nth-child({$i}) {
        transform: rotate(180deg / ($item-count - 1) * ($i - 1)) translateX(-($item-size + 50px))
      }
    }
  }
}

.menu-container {
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  margin: auto
  width: $item-size
  height: $item-size
  display: block
  transition: opacity .5s, transform .5s
}

.menu {
  display: block
  width: inherit
  height: inherit
  color: $item-color
  background: $item-background
  border-radius: 50%
  text-align: center
  text-decoration: none
  font-size: 12px
  cursor: pointer
  transition: .2s

  &.completed {
    &:hover {
      box-shadow: 0 0 0 $item-size / 40 rgba($white, 0.3)
      background: rgba($item-background, 0.3)
    }
  }

  &.pending {
    opacity: .5
    cursor: default

    &:hover {
      background: $item-background
    }
  }
}

.menu-text {
  display: block
  position: relative
  top: 50%
  width: ($item-size - 10px)
  margin: auto
  word-wrap: break-word
  transform: translateY(-50%)
}

</style>
