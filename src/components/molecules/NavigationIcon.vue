<template>
  <div class="navigation-icon__container">
    <img
      :src="require(`@/assets/${iconImage}`)"
      class="navigation-icon__image"
    >
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
    iconImage: {
      type: String,
      required: true
    },
    iconLabel: {
      type: String,
      required: true
    }
  },
  methods: {
    loadImage (imagePath) {
      return require(imagePath)
    }
  }
}
</script>
<style lang="scss">
  .navigation-icon {
    &__container {
      color: inherit;
    }
    &__image {
      width: 24px;
      height: 24px;
      fill: $main-color
    }
    &__label {
      color: inherit;
    }
  }
</style>
