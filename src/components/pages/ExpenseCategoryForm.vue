<template>
  <div>
    <p>出金品目</p>
    <AddCategoryForms
      :category-item="categoryItem"
      @inputAddCategoryForm="onChange"
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
import { mapMutations } from 'vuex';
export default {
  name: 'ExpenseCategoryForm',
  components: {
    Button,
    AddCategoryForms
  },
  data () {
    return {
      item: {
        id: '',
        name: '',
        price: 0
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
    ...mapMutations('expenses', ['add']),
    onChange (categoryItem) {
      this.item = categoryItem;
    },
    addCategoryItem () {
      this.add(this.categoryItem);
      this.item = {
        id: '',
        name: '',
        price: 0
      };
      console.log(this.item);
    }
  }

};
</script>
