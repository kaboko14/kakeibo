<template>
  <div class="add-category-page__container">
    <AddCategory
      class="add-category-page__add-category"
      @clickAddCategoryItemButton="addCategoryItem"
    />
    <CategoryItems />
  </div>
</template>
<script>
import AddCategory from '@/components/templates/AddCategory.vue'
import CategoryItems from '@/components/organisms/CategoryItems.vue'
export default {
  name: 'AddCategoryPage',
  components: {
    AddCategory,
    CategoryItems
  },
  data () {
    return {
      categories: [
        { id: 0, name: 'コンビニ', price: 150 },
        { id: 1, name: 'スーパー', price: 2000 },
        { id: 2, name: '外食', price: 1000 },
        { id: 3, name: '自販機', price: 130 },
        { id: 4, name: '消耗品', price: 200 }
      ],
      categoryId: 0
    }
  },
  mounted () {
    this.categoryId = this.categories.reduce((maxId, categoryItem) => Math.max(maxId, categoryItem.id), 0) + 1
  },
  methods: {
    addCategoryItem (categoryItem) {
      const newCategoryItem = { ...categoryItem }
      newCategoryItem.id = this.categoryId++
      this.categories.push(newCategoryItem)
      this.sortCategoryItems()
    },
    sortCategoryItems () {
      this.categories.sort((a, b) => {
        if (a.id > b.id) return -1
        if (a.id < b.id) return 1
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.add-category-page {
  &__container {
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
    padding: 10px;
  }
  &__add-category {
    widows: 30%;
    min-width: 320px;
    padding: 10px;
  }
}
</style>
