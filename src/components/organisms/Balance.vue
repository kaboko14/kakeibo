<template>
  <Card
    :card-title="'おおよそ残高'"
    class="balance"
  >
    <div class="balance__wrapper">
      <WalletIcon class="balance__wallet-icon" />
      <p class="balance__balance">
        ￥{{ balance.toLocaleString() }}
      </p><br>
      <Button
        class="balance__button"
        :button-color="'color-sub'"
        @click="openModal"
      >
        <p>
          残高を合わせる
        </p>
      </Button>
    </div>
    <Modal
      v-show="modalView"
      :modal-title="'残高を調整'"
      @close-button-click="closeModal"
    >
      <p
        class="balance__modal__text"
      >
        現在の残高を入力してください
      </p>
      <Form
        :value="inputBalance"
        :form-property="formProperty"
        class="balance__modal__form"
        @input="onChange"
      />
      <p
        class="balance__modal__difference"
      >
        差額：
        <span
          class="
        balance__modal__difference-price"
        >
          \{{ difference.toLocaleString() }}
        </span>
      </p>
      <div class="balance__modal__button-wrapper">
        <Button
          :button-color="'color-sub'"
          @click="changeBalance"
        >
          <p>
            残高変更
          </p>
        </Button>
      </div>
    </Modal>
  </Card>
</template>
<script>
import Card from '@/components/atoms/Card.vue';
import Modal from '@/components/atoms/Modal.vue';
import Button from '@/components/atoms/Button.vue';
import Form from '@/components/molecules/Form.vue';
import WalletIcon from '@/components/icons/WalletIcon.vue';
import { getDate } from '@/utils';
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'Balance',
  components: {
    Card,
    Modal,
    Form,
    WalletIcon,
    Button
  },
  data() {
    return {
      formProperty: {
        inputType: 'tel',
        placeholder: '0'
      },
      inputBalance: '',
      modalView: false
    };
  },
  computed: {
    ...mapGetters('balance', ['balance']),
    difference() {
      return this.inputBalance - this.balance;
    }
  },
  methods: {
    ...mapMutations('items', ['add']),
    ...mapMutations('balance', ['calculate']),
    openModal () {
      this.modalView = true;
    },
    closeModal () {
      this.modalView = false;
    },
    onChange (value) {
      this.inputBalance = value;
    },
    changeBalance () {
      const balanceItem = {
        date: getDate(),
        category: '',
        price: this.difference,
        type: 'balance'
      };
      this.add(balanceItem);
      this.calculate(balanceItem.price);
      this.closeModal();
      this.inputBalance = '';
    }
  }
};
</script>
<style lang="scss" scoped>
  .balance {
    &__wrapper {
      text-align: center;
    }
    &__wallet-icon {
      width: 24px;
      height: 24px;
      margin-bottom: 10px;
      display: inline-block;
      fill: $font-color-bk;
    }
    &__balance {
      display: inline-block;
      font-size: 28px;
      margin-bottom: 10px;
      vertical-align: bottom;
    }
    &__modal {
      &__text {
        margin-bottom: 10px;
      }
      &__form {
        margin-bottom: 10px;
      }
      &__difference {
        font-size: 14px;
        // text-align: center;
        &-price {
          font-size: 20px;
          line-height: 2;
        }
      }
      &__button-wrapper {
        text-align: center;
      }
    }
  }
</style>
