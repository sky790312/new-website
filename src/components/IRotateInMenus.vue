<template>
  <div class="i-rotate-in-menus">
    <slot></slot>
    <ul
      :class="['menus', {'active': isActive}]">
      <li
        v-for="menu in menus"
        :key="menu.name"
        class="menu">
        <a
          @click="onIRotateInMenusClick(menu)"
          :class="['menu-item', menu.status]">
          <strong
            class="menu-text">
            {{ menu.text }}
          </strong>
        </a>
      </li>
    </ul>
  </div>
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

.i-rotate-in-menus {
  z-index: 0
}

for $i in (1..$item-count) {
  .menu:nth-child({$i}) .menu-item {
    transform: rotate(-180deg / ($item-count - 1) * ($i - 1))
  }
}

.menus {
  visibility: hidden

  &.active {
    visibility: visible

    for $i in (1..$item-count) {
      .menu:nth-child({$i}) {
        transform: rotate(180deg / ($item-count - 1) * ($i - 1)) translateX(-($item-size + 50px))
      }
    }
  }
}

.menu {
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

.menu-item {
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
