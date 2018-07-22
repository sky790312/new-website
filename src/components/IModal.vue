<template>
  <transition name="modal">
    <div
      class="i-modal"
      @click.self="closeModal">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">
            default header
          </slot>
        </div>
        <div class="modal-body">
          <slot name="body">
            default body
          </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            default footer
            <button class="modal-default-button" @click="closeModal">
              OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IModal',

  props: {

  },

  mounted () {
    document.addEventListener('keyup', this.closeModalByEsc)
  },

  beforeDestroy () {
    document.removeEventListener('keyup', this.closeModalByEsc)
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
    }
  }
}
</script>

<style lang="stylus" scoped>

$black = #000

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
  width: 300px
  margin: 0px auto
  padding: 20px 30px
  background-color: #fff
  border-radius: 2px
  box-shadow: 0 2px 8px rgba($black, .33)
  transition: all .3s ease
}

// .modal-header h3 {
//   margin-top: 0
// }

.modal-body {
  margin: 20px 0
}

// .modal-default-button {
//   float: right
// }

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
