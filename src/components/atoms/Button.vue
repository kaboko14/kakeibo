<template>
  <button
    :class="className"
    @click.stop="$emit('click')"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    buttonColor: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    className () {
      return `button button--${this.buttonColor}`;
    }
  }
};
</script>
<style scoped lang="scss">
.button {
  display: inline-block;
  width: 250px;
  max-width: 100%;
  height: 100%;
  padding: 6px 4px;
  border: none;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  touch-action: manipulation;

  &.button--color-disable{
    @include button-decoration-active($button-thickness)
  }

  &:focus{
    outline: 0;
  }
  &:active {
    @include button-decoration-active($button-thickness)
  }
  &  * {
    color: #ffffff;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
// クラスごとの色の指定
$button-color: (
  "button--color-main": $button-color-main,
  "button--color-sub": $button-color-sub,
  "button--color-accent": $button-color-accent,
  "button--color-gray-light": $button-color-gray-light,
  "button--color-gray-dark": $button-color-gray-dark,
  "button--color-disable": $button-color-disable,
);
@each $key, $color in $button-color {
  .#{$key} {
    @include button-decoration($color)
  }
}
</style>
