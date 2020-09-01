<template>
  <div class="category-buttons__container">
    <Button
      v-for="button in buttonProperties"
      :key="button.id"
      :button-class="'button--color-main'"
      @click="onChange(button)"
    >
      <p>
        {{ button.labelName }}<br>
        {{ button.labelPrice }}
      </p>
    </Button>
  </div>
</template>
<script>
import Button from '@/components/atoms/Button.vue'

export default {
  name: 'CategoryButtons',
  components: {
    Button
  },
  props: {
    newItem: {
      type: Object,
      required: true
    },
    buttonProperties: {
      type: Object,
      required: true
    }
  },
  methods: {
    onChange (item) {
      const newItem = item.price
        ? {
          ...this.newItem,
          category: item.name,
          price: item.price
        }
        : {
          ...this.newItem,
          category: item.name
        }
      this.$emit('clickCategoryButton', newItem)
    }
  }
}
</script>

<style lang="scss" scoped>
.category-buttons {
  &__container {
    width:100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%,1fr));
    gap: 10px;
    justify-items: center;
    align-items: center;
  }
}
</style>
