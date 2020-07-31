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
      this.$emit('input', event.target.value)
    }
  }
}
</script>
<style scoped lang="scss">
.input {
  display: inline-block;
  width: 100%;
  height: 26px;
  padding: 0 4px;
  background-color: #ffffff;
  border: 1px solid #707070;
  border-radius: 4px;
  font-size: 16px;
  line-height: 1.5;
}
</style>
