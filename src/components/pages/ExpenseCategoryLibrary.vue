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
      @update-button-click="updateCategoryItem"
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
  name: 'ExpenseCategoryLibrary',
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
    ...mapGetters('expenses', ['buttonProperties']),
    selectedCategoryItem () {
      return {
        ...this.categoryItem,
        price: this.categoryItem.price * 1
      };
    }
  },
  methods: {
    ...mapMutations('expenses', ['update', 'remove']),
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
    updateCategoryItem () {
      this.update(this.selectedCategoryItem);
      this.closeModal();
    },
    removeCategoryItem () {
      this.remove(this.selectedCategoryItem);
      this.closeModal();
    }
  }
};
</script>
