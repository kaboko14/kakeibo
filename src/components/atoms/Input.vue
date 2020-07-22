<template>
  <input
    :type="inputType"
    class="input"
    @input="sendValue($event.target.value)"
    :value="inputType === 'date' ? formPlaceholder : value"
    :placeholder="formPlaceholder"
  />
</template>
<script>
export default {
  name: "Input",
  props: {
    inputType: {
      type: String,
    },
    value: {},
    formPlaceholder: {},
  },
  methods: {
    sendValue(value) {
      this.$emit("input", value);
    },
  },
};
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
