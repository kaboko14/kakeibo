<template>
  <div>
    <CategoryItems
      class="category-library"
      :button-properties="buttonProperties"
      @category-button-click="openChangeCategoryModal"
    />
    <Modal
      v-show="modalView"
      @close-button-click="closeModal"
    >
      <AddCategoryForms
        :category-item="selectedCategoryItem"
        @add-category-form-input="onChange"
      >
        <div class="expense-category-library__modal-buttons-container">
          <Button
            :button-color="'color-sub'"
            class="library__add-item-button"
            @click="changeCategoryItem"
          >
            <p>
              内容を更新
            </p>
          </Button>
          <Button
            :button-color="'color-accent'"
            class="library__add-item-button"
            @click="removeCategoryItem"
          >
            <p>
              品目を削除
            </p>
          </Button>
        </div>
      </AddCategoryForms>
    </Modal>
  </div>
</template>
<script>
import Button from '@/components/atoms/Button.vue';
import Modal from '@/components/atoms/Modal.vue';
import CategoryItems from '@/components/molecules/CategoryItems.vue';
import AddCategoryForms from '@/components/organisms/AddCategoryForms.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'ExpenseCategoryLibrary',
  components: {
    Button,
    Modal,
    AddCategoryForms,
    CategoryItems
  },
  data () {
    return {
      categoryItem: {},
      modalView: false
    };
  },
  computed: {
    ...mapGetters('expenses', ['buttonProperties']),
    selectedCategoryItem () {
      return {
        ...this.categoryItem,
        price: this.categoryItem.price * 1
      };
    }
  },
  methods: {
    ...mapMutations('expenses', ['change', 'remove']),
    onChange (categoryItem) {
      this.categoryItem = categoryItem;
    },
    openChangeCategoryModal (categoryItem) {
      this.onChange(categoryItem);
      this.modalView = !this.modalView;
    },
    closeModal () {
      this.modalView = false;
    },
    changeCategoryItem () {
      this.change(this.selectedCategoryItem);
      this.closeModal();
    },
    removeCategoryItem () {
      this.remove(this.selectedCategoryItem);
      this.closeModal();
    }
  }
};
</script>
<style lang="scss" scoped>
.expense-category-library {
  &__modal-buttons-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
    gap: 10px;
    justify-items: center;
    align-items: center;
  }
}
</style>
