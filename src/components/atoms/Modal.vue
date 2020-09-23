<template>
  <transition name="modal__fade">
    <div class="modal__background">
      <div class="modal__window">
        <p
          v-show="modalTitle"
          class="modal__title"
        >
          {{ modalTitle }}
        </p>
        <div class="modal__wrapper">
          <div
            class="modal__close-button"
            @click="$emit('close-button-click')"
          >
            ×
          </div>
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    modalTitle: {
      type: String,
      required: false,
      default: null
    }
  }
};
</script>
<style lang="scss" scoped>
.modal__fade-enter-active {
  animation: fade-in 0.1s ease-out;
}
.modal__fade-leave-active {
  animation: fade-in 0.1s ease-out reverse;
}
.modal {
  &__background {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0px 30px;
    background-color: rgba(0, 0, 0, 0.7);
  }
  &__window {
    position: relative;
    padding: 36px 10px 16px ;
    background-color: $base-color;
    border-radius: 4px;
    overflow: hidden;
  }
  &__close-button {
    position: absolute;
    top:4px;
    right: 4px;
    font-size: 28px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
  }
  &__title {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    position: absolute;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
  }
  &__wrapper {
    text-align: center;
    padding: 20px 0px 0px;
  }
}

</style>
