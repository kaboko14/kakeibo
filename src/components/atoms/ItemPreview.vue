<template>
  <div class="item-preview-wrapper">
    <p class="item-preview__date">
      {{ itemDate.replace(/-/g, "/") }}
    </p>
    <p class="item-preview__text">
      {{ itemCategory }} ￥{{ itemPrice.toLocaleString() }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'ItemPreview',
  props: {
    itemDate: {
      type: String,
      required: true
    },
    itemCategory: {
      type: String,
      required: true
    },
    itemPrice: {
      type: Number,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
.item-preview {
  &-wrapper {
    padding: 0 6px;
    text-align: center;
    line-height: 1.4;
    overflow: auto;
  }
  &__date {
    margin-bottom: 4px;
    font-size: 14px;
  }
  &__text {
    font-size: 20px;
    border-bottom: 1px dotted #707070;
  }
}
</style>
