<template>
  <button :class="[button, buttonClass]" @click="$emit('click')">
    <p v-for="(label, index) in buttonLabel" :key="index">
      {{ label }}
    </p>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    buttonLabel: {
      type: Array,
    },
    buttonClass: {
      type: String,
    },
  },
  data() {
    return {
      button: "button",
    };
  },
};
</script>
<style scoped lang="scss">
.button {
  width: 100%;
  padding: 4px;
  overflow: hidden;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  > p {
    color: #fff;
  }

  &-category {
    height: 60px;
    background: #7dd983;
  }

  &-plus {
    height: 40px;
    background: #d97d90;
  }

  &-minus {
    height: 40px;
    background: #7d99d9;
  }

  &-need {
    height: 58px;
    background: #7dd3d9;
    font-weight: bold;
    font-size: 18px;
  }

  &-want {
    height: 58px;
    background: #d97d7d;
    font-weight: bold;
    font-size: 18px;
  }

  &-edit {
    height: 30px;
    background-color: #d9c07d;
    font-size: 10px;
  }
  &-delete-item {
    width: 26px;
    height: 26px;
    background-color: #777;
  }
}
</style>
