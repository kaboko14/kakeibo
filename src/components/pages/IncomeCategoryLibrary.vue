<template>
  <div>
    <CategoryItems
      class="category-library"
      :button-properties="buttonProperties"
      @category-button-click="openChangeCategoryModal"
    />
    <ChangeCategoryModal
      v-show="modalView"
      :selected-category-item="selectedCategoryItem"
      @close-button-click="closeModal"
      @change-button-click="changeCategoryItem"
      @remove-button-click="removeCategoryItem"
      @input-form="onChange"
    />
  </div>
</template>
<script>
import CategoryItems from '@/components/molecules/CategoryItems.vue';
import ChangeCategoryModal from '@/components/organisms/ChangeCategoryModal.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'IncomeCategoryLibrary',
  components: {
    ChangeCategoryModal,
    CategoryItems
  },
  data () {
    return {
      categoryItem: {},
      modalView: false
    };
  },
  computed: {
    ...mapGetters('incomes', ['buttonProperties']),
    selectedCategoryItem () {
      return {
        ...this.categoryItem,
        price: this.categoryItem.price * 1
      };
    }
  },
  methods: {
    ...mapMutations('incomes', ['change', 'remove']),
    onChange (categoryItem) {
      this.categoryItem = categoryItem;
    },
    openChangeCategoryModal (categoryItem) {
      this.onChange(categoryItem);
      this.modalView = true;
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
