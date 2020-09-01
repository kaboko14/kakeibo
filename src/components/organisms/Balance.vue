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
      @close-button-click="closeModal"
    >
      <Form
        :value="inputBalance"
        :form-property="formProperty"
        @input="onChange"
      />
      <p v-show="inputBalance">
        現在の残高との差額<br>
        ￥{{ difference.toLocaleString() }}
      </p>
      <Button
        class="balance__button"
        :button-color="'color-sub'"
        @click="changeBalance"
      >
        <p>
          残高変更
        </p>
      </Button>
    </Modal>
  </Card>
</template>
<script>
import Card from '@/components/atoms/Card.vue';
import Modal from '@/components/atoms/Modal.vue';
import Button from '@/components/atoms/Button.vue';
import Form from '@/components/molecules/Form.vue';
import WalletIcon from '@/components/icons/WalletIcon.vue';
import moment from 'moment';
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
        labelText: '残高',
        placeholder: '入力してください'
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
        date: this.momentFormat(this.moment()),
        category: '',
        price: this.difference,
        type: 'balance'
      };
      this.add(balanceItem);
      this.calculate(balanceItem.price);
      this.closeModal();
      this.inputBalance = '';
    },
    moment () {
      return moment();
    },
    momentFormat (date) {
      const m = moment(date, 'YYYY-MM-DD');
      return m.format('YYYY-MM-DD');
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
  }
</style>
