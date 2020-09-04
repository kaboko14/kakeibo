<template>
  <div>
    <p>出金品目</p>
    <AddCategoryForms
      :category-item="categoryItem"
      @add-category-form-input="onChange"
    >
      <Button
        :button-color="'color-sub'"
        @click="addCategoryItem"
      >
        <p>
          新規登録
        </p>
      </Button>
    </AddCategoryForms>
  </div>
</template>
<script>
import Button from '@/components/atoms/Button.vue';
import AddCategoryForms from '@/components/organisms/AddCategoryForms.vue';
import { mapActions } from 'vuex';
export default {
  name: 'ExpenseCategoryForm',
  components: {
    Button,
    AddCategoryForms
  },
  data () {
    return {
      item: {
        name: '',
        price: 0,
        createdAt: ''
      }
    };
  },
  computed: {
    categoryItem () {
      return {
        ...this.item,
        price: this.item.price * 1 === 0
          ? null
          : this.item.price * 1
      };
    }
  },
  methods: {
    ...mapActions('expenses', ['add']),
    onChange (categoryItem) {
      this.item = categoryItem;
    },
    addCategoryItem () {
      this.add(this.categoryItem);
      this.item = {
        name: '',
        price: 0,
        createdAt: ''
      };
    }
  }

};
</script>
