<template>
  <input
    :type="inputType"
    :placeholder="placeholder"
    class="input"
    :value="value"
    @input="onChange"
  >
</template>
<script>
export default {
  name: 'Input',
  props: {
    inputType: {
      type: String,
      required: true
    },
    placeholder: {
      type: [String, Number],
      required: false,
      default: null
    },
    value: {
      type: [String, Number],
      required: false,
      default: null
    }
  },
  methods: {
    onChange (event) {
      this.$emit('input', event.target.value);
    }
  }
};
</script>
<style scoped lang="scss">
.input {
  -webkit-appearance: none;
  display: inline-block;
  width: 100%;
  height: 26px;
  padding: 0 4px;
  background-color: $base-color;
  border: 1px solid $gray-4;
  border-radius: 4px;
  font-size: 16px;
  line-height: 1.5;
}
</style>
