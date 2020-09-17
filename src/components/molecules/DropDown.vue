<template>
  <transition name="drop-down">
    <div class="drop-down">
      <div
        class="drop-down__background"
        @click="close"
      >
      </div>
      <div class="drop-down__body">
        <slot />
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'DropDown',
  methods: {
    close() {
      this.$emit('drop-down-background-click');
    }
  }
};
</script>
<style lang="scss" scoped>
.drop-down-enter-active {
  animation: drop-down 0.2s ease-out;
}
.drop-down-leave-active {
  animation: drop-down 0.2s ease-out reverse;
}
.drop-down{
  position: relative;
  &__background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    z-index: 10;
  }
  &__body {
    position: relative;
    width: 150px;
    max-width: 100%;
    padding: 5px 5px;
    line-height: 50px;
    border-radius: 4px;
    color: $font-color-bk;
    text-align: center;
    font-size: 14px;
    z-index: 30;
    background-color: $base-color;
    box-shadow: $box-shadow;
  }
}

</style>
