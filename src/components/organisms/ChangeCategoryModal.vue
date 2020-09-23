<template>
  <Modal
    :modal-title="'品目を編集'"
    @close-button-click="$emit('close-button-click')"
  >
    <AddCategoryForms
      :category-item="selectedCategoryItem"
      @add-category-form-input="onChange"
    >
      <div class="update-category-modal__buttons-container">
        <Button
          :button-color="'color-accent'"
          @click="removeCategoryItem"
        >
          <p>
            品目を削除
          </p>
        </Button>
        <Button
          :button-color="'color-sub'"
          @click="updateCategoryItem"
        >
          <p>
            内容を更新
          </p>
        </Button>
      </div>
    </AddCategoryForms>
  </Modal>
</template>
<script>
import Button from '@/components/atoms/Button.vue';
import Modal from '@/components/atoms/Modal.vue';
import AddCategoryForms from '@/components/organisms/AddCategoryForms.vue';
export default {
  name: 'ChangeCategoryModal',
  components: {
    Button,
    Modal,
    AddCategoryForms
  },
  props: {
    selectedCategoryItem: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      categoryIte: {}
    };
  },
  methods: {
    onChange (categoryItem) {
      this.$emit('input-form', categoryItem);
    },
    updateCategoryItem () {
      this.$emit('update-button-click', this.selectedCategoryItem);
    },
    removeCategoryItem () {
      this.$emit('remove-button-click', this.selectedCategoryItem);
    }
  }
};
</script>
<style lang="scss" scoped>
.update-category-modal {
  &__buttons-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
    gap: 10px;
    margin-top: 24px;
    justify-items: center;
    align-items: center;
  }
}
</style>
