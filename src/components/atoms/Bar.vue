<template>
  <div class="bar">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'Bar'
};
</script>
<style lang="scss" scoped>
  .bar {
    width: 100vw;
    background-color: $main-color;
    box-shadow: $box-shadow
  }
</style>
