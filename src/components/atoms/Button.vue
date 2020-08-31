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
  display: inline-block;
  width:150px;
  max-width: 100%;
  height: 100%;
  padding: 6px 4px;
  border: none;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;

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
