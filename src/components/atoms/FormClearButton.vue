<template>
  <button
    class="clear-button"
    @click="$emit('click')"
  >
    ×
  </button>
</template>
<script>
export default {
  name: 'FormClearButton'
}
</script>
<style scoped lang="scss">
.clear-button {
  width: 26px;
  height: 26px;
  border: none;
  background-color: #707070;
  color: #fff;
  cursor: pointer;
}
</style>
