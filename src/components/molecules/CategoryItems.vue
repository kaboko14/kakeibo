<template>
  <div class="category-items__container">
    <Button
      v-for="button in buttonProperties"
      :key="button.id"
      :button-class="button.className"
      class="category-items__item"
      @click="onChange(button)"
    >
      {{ button.labelName }}<br>
      {{ button.labelPrice }}<br>
      <img
        src="../../assets/edit.svg"
        alt="[編集する]"
        class="category-items__edit-icon"
      >
    </Button>
  </div>
</template>
<script>
import Button from '@/components/atoms/Button.vue'

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
  data () {
    return {
    }
  },
  computed: {
    categoryItems () {
      return Object.assign([], this.categories)
    }
  },
  methods: {
    onChange (categoryItem) {
      const newCategoryItem = categoryItem.price
        ? {
          ...this.newCategoryItem,
          id: categoryItem.id,
          name: categoryItem.name,
          price: categoryItem.price
        }
        : {
          ...this.newCategoryItem,
          id: categoryItem.id,
          name: categoryItem.name
        }
      this.$emit('clickCategoryButton', newCategoryItem)
    },
    sendDeleteCategoryId (id) {
      this.$emit('clickDeleteCategoryButton', id)
    }
  }
}
</script>
<style lang="scss" scoped>
.category-items {
  &__container {
    width:100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%,1fr));
    gap: 10px;
    justify-items: center;
    align-items: center;
  }
  &__item {
    position: relative;
    padding: 20px 0px;
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
