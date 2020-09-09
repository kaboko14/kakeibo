<template>
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
.drop-down{
  position: relative;
  &__background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
  }
  &__body {
    width: 150px;
    max-width: 100%;
    position: relative;
    padding: 5px 5px;
    line-height: 50px;
    border-radius: 4px;
    color: $font-color-bk;
    text-align: center;
    font-size: 14px;
    background-color: $base-color;
    box-shadow: $box-shadow;
    cursor: pointer;
  }
}

</style>
