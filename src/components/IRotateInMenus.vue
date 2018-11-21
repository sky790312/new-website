<template>
  <div class="i-rotate-in-menus">
    <slot></slot>
    <ul
      :class="['menus', {'active': isActive}]">
      <li
        v-for="menu in iMenus"
        :key="menu.name"
        class="menu">
        <a
          @click="onIRotateInMenusClick(menu)"
          :class="['menu-title', menu.status, {'acitve' : menu.isActive}]">
            {{ useI18n ? $t(menu.text) : menu.text }}
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

    useI18n: {
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

  computed: {
    iMenus () {
      return this.menus.map(menu => ({
        ...menu,
        status: menu.status || 'completed',
        isActive: menu.isActive || false
      }))
    }
  },

  methods: {
    onIRotateInMenusClick (menu) {
      if (menu.status !== 'completed') {
        return
      }

      menu.isActive = !menu.isActive
      this.$emit('onIRotateInMenusClick', menu)
    }
  },

  mounted () {
    if (this.menus.length !== 5) {
      console.warn('IRotateInMenus menus shoud only be 5 now..')
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
  .menu:nth-child({$i}) .menu-title {
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

.menu-title {
  display: flex
  justify-content: center
  align-items: center
  width: inherit
  height: inherit
  color: $item-color
  background-color: $item-background
  border-radius: 50%
  text-decoration: none
  font-size: 12px
  font-weight: bold
  text-align: center
  cursor: pointer
  transition: .2s

  &.completed {
    &:hover, &.acitve {
      box-shadow: 0 0 0 ($item-size / 40) rgba($white, 0.3)
      background-color: rgba($item-background, 0.3)
    }
  }

  &.pending {
    opacity: .5
    cursor: default

    &:hover {
      background-color: $item-background
    }
  }
}

</style>
