<template>
  <button
    :class="className"
    @click="$emit('click')"
  >
    <p class="button__label">
      <slot />
    </p>
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    buttonClass: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    className () {
      return `button ${this.buttonClass}`
    }
  }
}
</script>
<style scoped lang="scss">
.button {
  width: 100%;
  padding: 4px;
  overflow: hidden;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &__label {
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

  &-income {
    height: 58px;
    background-color: #d9c07d;
    font-size: 18px;
  }
  &-delete-item {
    width: 26px;
    height: 26px;
    background-color: #777;
  }
  &-add-category {
    height: 58px;
    background: #d97d7d;
    font-weight: bold;
    font-size: 18px;
  }
}
</style>
