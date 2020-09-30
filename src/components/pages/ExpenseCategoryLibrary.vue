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
      @close-button-click="closeChangeCategoryModal"
      @update-button-click="updateCategoryItem"
      @remove-button-click="openConfirmModal"
      @input-form="onChange"
    />
    <ConfirmModal
      v-show="confirmModalView"
      :confirm-modal-title="'削除しますか？'"
      @close-button-click="closeConfirmModal"
      @confirm-button-click="removeCategoryItem($event)"
    >
      <p>
        【出金品目】
        {{ selectedCategoryItem.name }}
        ￥{{ selectedCategoryItem.price }}
      </p>
    </ConfirmModal>
  </div>
</template>
<script>
import ConfirmModal from '@/components/molecules/ConfirmModal.vue';
import CategoryItems from '@/components/molecules/CategoryItems.vue';
import ChangeCategoryModal from '@/components/organisms/ChangeCategoryModal.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'ExpenseCategoryLibrary',
  components: {
    ConfirmModal,
    ChangeCategoryModal,
    CategoryItems
  },
  data () {
    return {
      categoryItem: {},
      modalView: false,
      confirmModalView: false
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
    ...mapActions('expenses', ['update', 'remove']),
    onChange (categoryItem) {
      this.categoryItem = categoryItem;
    },
    openChangeCategoryModal (categoryItem) {
      this.onChange(categoryItem);
      this.modalView = true;
    },
    closeChangeCategoryModal () {
      this.modalView = false;
    },
    openConfirmModal() {
      this.closeChangeCategoryModal();
      this.confirmModalView = true;
    },
    closeConfirmModal() {
      this.confirmModalView = false;
    },
    updateCategoryItem () {
      this.update(this.selectedCategoryItem);
      this.closeChangeCategoryModal();
    },
    removeCategoryItem ($event) {
      if ($event) {
        this.remove(this.selectedCategoryItem);
      }
      this.closeConfirmModal();
    }
  }
};
</script>
