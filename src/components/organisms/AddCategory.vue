<template>
  <div>
    <AddCategoryForms
      class="add-category__add-category-forms"
      :new-category-item="newCategoryItem"
      @inputAddCategoryForm="onChange"
    />
    <!-- 追加ボタンのスタイル・横幅は仮 -->
    <Button
      style="width:200px"
      :button-class="'button--color-sub'"
      @click="addNewCategoryItem"
    >
      <p>
        追加する
      </p>
    </Button>
  </div>
</template>
<script>
import AddCategoryForms from '@/components/organisms/AddCategoryForms.vue'
import Button from '@/components/atoms/Button.vue'
export default {
  name: 'AddCategory',
  components: {
    AddCategoryForms,
    Button
  },
  data () {
    return {
      categoryItem: {
        name: '',
        price: 0
      }
    }
  },
  computed: {
    newCategoryItem () {
      return {
        name: this.categoryItem.name,
        price: this.categoryItem.price * 1
      }
    }
  },
  methods: {
    onChange (categoryItem) {
      this.categoryItem = categoryItem
    },
    addNewCategoryItem () {
      this.$emit('clickAddCategoryItemButton', this.newCategoryItem)
      this.categoryItemInit()
    },
    categoryItemInit () {
      this.categoryItem.name = ''
      this.categoryItem.price = 0
    }
  }
}
</script>
<style lang="scss" scoped>
.add-category {
  &__add-category-forms {
    margin-bottom: 20px;
  }
}

</style>
