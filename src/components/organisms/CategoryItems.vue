<template>
  <div>
    <div
      v-for="button in buttonProperties"
      :key="button.id"
      class="category-items__container"
    >
      <Button
        :button-class="button.className"
        style="width:200px"
      >
        {{ button.labelName }}<br>
        {{ button.labelPrice }}
      </Button>
      <Button
        :button-class="'button-delete-item'"
        class="category-items__delete-button"
      >
        ×
      </Button>
    </div>
  </div>
</template>
<script>
import Button from '@/components/atoms/Button.vue'

export default {
  name: 'CategoryItems',
  components: {
    Button
  },
  data () {
    return {
      categories: [
        { id: 0, name: 'コンビニ', price: 150 },
        { id: 1, name: 'スーパー', price: 2000 },
        { id: 2, name: '外食', price: 1000 },
        { id: 3, name: '自販機', price: 130 },
        { id: 4, name: '消耗品', price: 200 }
      ]
    }
  },
  computed: {
    categoryItems () {
      return Object.assign([], this.categories)
    },
    buttonProperties () {
      return this.categoryItems.map((item) => {
        return {
          id: item.id,
          labelName: item.name,
          labelPrice: `￥${item.price.toLocaleString()}`,
          className: 'button-category'
        }
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.category-items {
  &__container {
    display: flex;
    margin-bottom: 10px;
    align-items: flex-end;
  }
  &__delete-button {
    margin-left: 6px;
  }
}
</style>
