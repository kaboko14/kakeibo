<template>
  <div class="category-library__container">
    <CategoryItems
      :button-properties="categoryButtonProperties"
      @clickCategoryButton="onChange"
    />
  </div>
</template>
<script>
import CategoryItems from '@/components/molecules/CategoryItems.vue'
export default {
  name: 'CategoryLibrary',
  components: {
    CategoryItems
  },
  props: {
    categoryButtonProperties: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      categoryItem: {
        id: null,
        name: '',
        price: null
      },
      addCategoryButton:
        {
          label: '新規登録',
          value: 'add',
          className: 'button-add'
        },
      changeCategoryButton: {
        label: '更新',
        value: 'change',
        className: 'button-change'
      },
      addCategoryModalView: false,
      changeCategoryModalView: false
    }
  },
  computed: {
    newCategoryItem () {
      return {
        id: this.categoryItem.id,
        name: this.categoryItem.name,
        price: !this.categoryItem.price
          ? null
          : this.categoryItem.price * 1
      }
    },
    addCategoryModalButtons () {
      return [this.addCategoryButton]
    },
    changeCategoryModalButtons () {
      return [this.changeCategoryButton, this.addCategoryButton]
    }
  },
  methods: {
    onChange (categoryItem) {
      this.$emit('clickCategoryButton', categoryItem)
    },
    changeCategory (categoryItem) {
      this.onChange(categoryItem)
      this.openChangeCategoryModal()
    },
    addCategory () {
      this.categoryItemInit()
      this.openAddCategoryModal()
    },
    onChangeCateboryItems (value) {
      if (value === 'add') {
        this.$emit('clickAddCategoryButton', this.newCategoryItem)
      }
      if (value === 'change') {
        this.$emit('clickChangeCategoryButton', this.newCategoryItem)
      }
      this.closeAddCategoryModal()
      this.closeChangeCategoryModal()
      this.categoryItemInit()
    },
    sendDeleteCategoryId (id) {
      this.$emit('clickDeleteCategoryButton', id)
    },
    categoryItemInit () {
      this.categoryItem.id = null
      this.categoryItem.name = ''
      this.categoryItem.price = null
    },
    openAddCategoryModal () {
      this.addCategoryModalView = true
    },
    openChangeCategoryModal () {
      this.changeCategoryModalView = true
    },
    closeAddCategoryModal () {
      this.addCategoryModalView = false
    },
    closeChangeCategoryModal () {
      this.changeCategoryModalView = false
    }
  }
}
</script>
<style lang="scss" scoped>
.category-library {
  &__container {
    text-align: center;
  }
  &__add-button {
    width: 40%;
    margin-bottom: 20px;
  }
}
.add-category {
  &__add-category-forms {
    margin-bottom: 20px;
  }
}

</style>
