<template>
  <div class="bar">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'Bar'
}
</script>
<style lang="scss" scoped>
  .bar {
    width: 100%;
    height: 48px;
    background-color: $main-color;
  }
</style>
