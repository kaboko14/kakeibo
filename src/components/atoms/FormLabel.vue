<template>
  <label class="label">{{ labelText }}：</label>
</template>
<script>
export default {
  name: 'FormLabel',
  props: {
    labelText: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
<style scoped lang="scss">
.label {
  font-size: 18px;
  line-height: 26px;
}
</style>
