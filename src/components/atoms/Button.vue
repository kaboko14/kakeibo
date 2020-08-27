<template>
  <button
    :class="className"
    @click.stop="$emit('click')"
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
// @import "@/styles/global";
.button {
  display: block;
  width:150px;
  max-width: 100%;
  padding: 4px;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &__label {
    color: #ffffff;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &-category {
    min-height: 60px;
    background: #7dd983;
  }

  &-plus {
    min-height: 40px;
    background: #d97d90;
  }

  &-minus {
    height: 40px;
    background: #7d99d9;
  }

  &-need,
  &-add {
    height: 50px;
    background: #7dd3d9;
    font-size: 18px;
  }

  &-want,
  &-change {
    height: 50px;
    background: #d97d7d;
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
  &-delete-category {
    height: 26px;
    background-color: #777;
  }
  &-add-category {
    height: 58px;
    background: #d97d7d;
    font-weight: bold;
    font-size: 18px;
  }
  &-sub-color {
    background-color: $sub-color;
  }
}
</style>
