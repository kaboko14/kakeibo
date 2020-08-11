<template>
  <div class="add-category-page__container">
    <AddCategory
      class="add-category-page__add-category"
      @clickAddCategoryItemButton="addCategoryItem"
    />
    <CategoryItems
      @clickDeleteCategoryItemButton="deleteCategoryItem"
    />
  </div>
</template>
<script>
import AddCategory from '@/components/templates/AddCategory.vue'
import CategoryItems from '@/components/molecules/CategoryItems.vue'
export default {
  name: 'AddCategoryPage',
  components: {
    AddCategory,
    CategoryItems
  },
  data () {
    return {
      categoryItems: []
    }
  },
  computed: {
    categoryId () {
      return this.$store.state.categoryItems.reduce((maxId, categoryItem) => Math.max(maxId, categoryItem.id), 0) + 1
    }
  },
  mounted () {
    this.categoryItems = [...this.$store.state.categoryItems]
  },
  methods: {
    addCategoryItem (categoryItem) {
      const newCategoryItem = { ...categoryItem }
      newCategoryItem.id = this.categoryId
      this.categoryItems.push(newCategoryItem)
      this.$store.commit('updateCategoryItems', [...this.categoryItems])
    },
    deleteCategoryItem (id) {
      this.categoryItems = this.categoryItems.filter(categoryItem => id !== categoryItem.id)
      this.$store.commit('updateCategoryItems', [...this.categoryItems])
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
