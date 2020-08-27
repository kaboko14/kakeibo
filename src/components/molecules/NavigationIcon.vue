<template>
  <div class="navigation-icon__container">
    <slot />
    <p
      class="navigation-icon__label"
    >
      {{ iconLabel }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'NavigationIcon',
  props: {
    iconLabel: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .navigation-icon {
    &__container {
      width: 80px;
      height: 40px;
      color: inherit;
      text-align: center;
      & svg {
        width: 24px;
        width: 24px;
        color: inherit;
        stroke: inherit;
      }
    }
    &__label {
      font-size: 12px;
      color: inherit;
    }
  }
</style>
