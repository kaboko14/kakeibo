<template>
  <input
    :type="inputType"
    class="input"
    @input="sendValue($event.target.value)"
    :value="value"
  />
</template>
<script>
export default {
  name: "Input",
  props: {
    inputType: {
      type: String,
    },
    value: {}
  },
  methods: {
    sendValue(value) {
      this.$emit("input", value);
    },
  },
  watch: {
    value(){
      this.$emit("input", this.value);
    }
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
