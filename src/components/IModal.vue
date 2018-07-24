<template>
  <transition
    name="modal">
    <div
      class="i-modal"
      @click.self="closeModalByBackground">
      <div
        class="modal-container"
        :style="{width, height}">
        <div
          v-if="hasCloseButton"
          class="modal-close"
          @click="closeModal">
          x
        </div>
        <div
          class="modal-header">
          <slot
            name="header">
            default header
          </slot>
        </div>
        <div
          class="modal-body">
          <slot
            name="body">
            default body
          </slot>
        </div>
        <div
          class="modal-footer">
          <slot
            name="footer">
            default footer
            <!-- <button class="modal-default-button" @click="closeModal">
              close
            </button> -->
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
const minWidth = 'auto'
const minHeight = 'auto'

export default {
  name: 'IModal',

  props: {
    width: {
      type: String,
      default () {
        return minWidth
      }
    },

    height: {
      type: String,
      default () {
        return minHeight
      }
    },

    canCloseByEsc: {
      type: Boolean,
      default () {
        return true
      }
    },

    canCloseByBackground: {
      type: Boolean,
      default () {
        return true
      }
    },

    hasCloseButton: {
      type: Boolean,
      default () {
        return true
      }
    }
  },

  mounted () {
    if (this.canCloseByEsc) {
      document.addEventListener('keyup', this.closeModalByEsc)
    }
  },

  beforeDestroy () {
    if (this.canCloseByEsc) {
      document.removeEventListener('keyup', this.closeModalByEsc)
    }
  },

  methods: {
    closeModal () {
      this.$emit('closeModal')
    },

    closeModalByEsc (event) {
      /* esc */
      if (event.keyCode === 27) {
        this.closeModal()
      }
    },

    closeModalByBackground () {
      if (this.canCloseByBackground) {
        this.closeModal()
      }
    }
  }
}
</script>

<style lang="stylus">

$mobileBreakPoint = 768px
$black = #000
$white = #fff

.i-modal {
  position: fixed
  z-index: 2500
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba($black, .5)
  display: flex
  justify-content: center
  align-items: center
  transition: opacity .3s ease
}

.modal-container {
  position: relative
  margin: 20px
  padding: 20px 30px
  // min-width: calc(100% - 100px)
  min-width: 300px
  width: 100%
  box-sizing: border-box
  background-color: $white
  border-radius: 2px
  box-shadow: 0 2px 8px rgba($black, .33)
  transition: all .3s ease

  @media screen and (min-width: $mobileBreakPoint) {
    min-width: 300px
    margin: auto
  }
}

.modal-close {
  position: absolute
  top: 5px
  right: 10px
  cursor: pointer
  font-size: 20px
  font-weight: bold
  line-height: 20px
  opacity: .6

  &:hover {
    opacity: .8
  }
}

.modal-header h3 {
  margin: 0
}

.modal-body {
  margin: 20px 0
}

.modal-footer {
  display: flex
  justify-content: flex-end
}

.modal-enter {
  opacity: 0
}

.modal-leave-active {
  opacity: 0
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1)
}
</style>
