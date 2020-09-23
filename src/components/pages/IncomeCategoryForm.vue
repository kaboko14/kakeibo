<template>
  <div>
    <p
      class="income-category-form__note"
    >
      ※品目は必ず入力してください
    </p>
    <AddCategoryForms
      :category-item="categoryItem"
      @add-category-form-input="onChange"
    >
      <Button
        v-if="item.name"
        :button-color="'color-sub'"
        @click="addCategoryItem"
      >
        <p>
          {{ buttonLabel }}
        </p>
      </Button>
      <Button
        v-else
        :button-color="'color-disable'"
      >
        <p>
          {{ buttonLabel }}
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
  name: 'IncomeCategoryForm',
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
      },
      buttonLabel: '入金品目を登録'
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
    ...mapActions('incomes', ['add']),
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
<style lang="scss" scoped>
.income-category-form {
  &__note {
    font-size: 12px;
    margin-bottom: 10px;
  }
}
</style>
