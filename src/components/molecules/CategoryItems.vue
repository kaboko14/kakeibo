<template>
  <div class="category-items__container">
    <Button
      v-for="button in buttonProperties"
      :key="button.id"
      :button-color="'color-main'"
      class="category-items__item"
      @click="onChange(button)"
    >
      <p>
        {{ button.labelName }}<br>
        {{ button.labelPrice }}<br>
      </p>
      <img
        src="../../assets/edit.svg"
        alt="[編集する]"
        class="category-items__edit-icon"
      >
    </Button>
  </div>
</template>
<script>
import Button from '@/components/atoms/Button.vue';

export default {
  name: 'CategoryItems',
  components: {
    Button
  },
  props: {
    buttonProperties: {
      type: Array,
      required: true
    }
  },
  methods: {
    onChange (categoryItem) {
      const selectedCategoryItem = {
        id: categoryItem.id,
        name: categoryItem.name,
        price: categoryItem.price
      };
      this.$emit('category-button-click', selectedCategoryItem);
    }
  }
};
</script>
<style lang="scss" scoped>
.category-items {
  &__container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    gap: 10px;
    justify-items: center;
    align-items: center;
  }
  &__item {
    position: relative;
    padding: 10px 0px 20px;
  }
  &__edit-icon {
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 20px;
    height: 20px;
  }
}
</style>
