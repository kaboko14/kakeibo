<template>
  <div class="modal__background">
    <div class="modal__window">
      <div
        class="modal__close-button"
        @click="modalClose"
      >
        ×
      </div>
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  methods: {
    modalClose () {
      this.$emit('clickModalCloseButton');
    }
  }
};
</script>
<style lang="scss" scoped>
.modal {
  &__background {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0px 30px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &__window {
    position: relative;
    padding: 36px 10px 10px ;
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
}

</style>
