<template>
  <Modal
    :modal-title="confirmModalTitle"
    @close-button-click="$emit('close-button-click')"
  >
    <div class="confirm-modal__body">
      <slot />
    </div>
    <div
      class="confirm-modal__buttons-container"
    >
      <Button
        :button-color="'color-sub'"
        @click="send(true)"
      >
        <p>
          はい
        </p>
      </Button>
      <Button
        :button-color="'color-accent'"
        @click="send(false)"
      >
        <p>
          いいえ
        </p>
      </Button>
    </div>
  </Modal>
</template>
<script>
import Modal from '@/components/atoms/Modal.vue';
import Button from '@/components/atoms/Button.vue';
export default {
  name: 'ConfirmModal',
  components: {
    Modal,
    Button
  },
  props: {
    confirmModalTitle: {
      type: String,
      required: false,
      default: null
    }
  },
  methods: {
    send(answer) {
      this.$emit('confirm-button-click', answer);
    }
  }
};
</script>
<style lang="scss" scoped>
.confirm-modal {
  &__buttons-container {
    width: 100%;
    max-width: 300px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
    gap: 10px;
    margin: 24px 0px 0px auto;
    justify-items: center;
    align-items: center;
  }
}
</style>
