<template>
  <div>
    <CategoryLibrary
      class="category-library"
      :category-button-properties="categoryButtonProperties"
      @clickAddCategoryButton="addCategoryItem"
      @clickChangeCategoryButton="changeCategoryItem"
      @clickDeleteCategoryButton="deleteCategoryItem"
    />
  </div>
</template>
<script>
import CategoryLibrary from '@/components/organisms/CategoryLibrary.vue'
export default {
  name: 'IncomeCategoryLibrary',
  components: {
    CategoryLibrary
  },
  computed: {
    categoryItems () {
      return [...this.$store.state.incomeCategoryItems]
    },
    categoryButtonProperties () {
      return this.$store.getters.incomeCategoryButtonProperties
    },
    categoryId () {
      return (
        this.categoryItems.reduce((maxId, categoryItem) => Math.max(maxId, categoryItem.id), 0) + 1
      )
    }
  },
  methods: {
    addCategoryItem (categoryItem) {
      const newCategoryItem = { ...categoryItem }
      newCategoryItem.id = this.categoryId
      this.categoryItems.push(newCategoryItem)
      this.$store.commit('updateIncomeCategoryItems', [...this.categoryItems])
    },
    changeCategoryItem (categoryItem) {
      const newCategoryItem = { ...categoryItem }
      const filteredCategoryItems = this.filterItems(this.categoryItems, newCategoryItem.id)
      filteredCategoryItems.push(newCategoryItem)
      this.sortItems(filteredCategoryItems)
      this.$store.commit('updateIncomeCategoryItems', filteredCategoryItems)
    },
    deleteCategoryItem (id) {
      const filteredCategoryItems = this.filterItems(this.categoryItems, id)
      this.$store.commit('updateIncomeCategoryItems', filteredCategoryItems)
    },
    filterItems (items, id) {
      return items.filter(item => item.id !== id)
    },
    sortItems (items) {
      items.sort((a, b) => {
        if (a.id > b.id) return 1
        if (a.id < b.id) return -1
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
