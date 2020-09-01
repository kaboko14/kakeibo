<template>
  <div class="card">
    <p class="card__title">
      {{ cardTitle }}
    </p>
    <slot />
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    cardTitle: {
      type: String,
      required: false,
      default: ''
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  width: 100%;
  padding: 10px;
  background-color: $base-color;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: $box-shadow;
  &__title {
    margin-bottom: 16px;
  }
}
</style>
