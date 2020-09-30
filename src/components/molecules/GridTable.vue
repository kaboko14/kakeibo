<template>
  <tr class="grid-table__wrapper">
    <td>
      <p
        class="grid-table__date"
      >
        {{ itemDate }}
      </p>
      <span
        class="grid-table__type"
        :class="item.type"
      >
        {{ itemType }}
      </span>
      <span class="grid-table__category">
        {{ item.category }}
      </span>
    </td>
    <td class="grid-table__price">
      ￥{{ item.price.toLocaleString() }}
    </td>
    <td class="grid-table__remove-button">
      <Button
        :button-color="'color-gray-dark'"
        @click="openConfirmModal"
      >
        <p>
          ×
        </p>
      </Button>
      <ConfirmModal
        v-show="confirmModalView"
        :confirm-modal-title="'削除しますか？'"
        @close-button-click="closeConfirmModal"
        @confirm-button-click="sendRemoveItem($event, item)"
      >
        <p>
          【{{ itemType }}】<br>
          {{ itemDate }}
          {{ item.category }}
          ￥{{ item.price.toLocaleString() }}
        </p>
      </ConfirmModal>
    </td>
  </tr>
</template>
<script>
import Button from '@/components/atoms/Button.vue';
import ConfirmModal from '@/components/molecules/ConfirmModal.vue';
import { formatDate } from '@/utils';
export default {
  name: 'GridTable',
  components: {
    Button,
    ConfirmModal
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      confirmModalView: false
    };
  },
  computed: {
    itemDate () {
      return formatDate(this.item.date);
    },
    itemType () {
      let itemType = '';
      switch (this.item.type) {
        case 'expense': itemType = '出金';
          break;
        case 'income': itemType = '入金';
          break;
        case 'balance': itemType = '調整';
          break;
      }
      return itemType;
    }
  },
  methods: {
    sendRemoveItem ($event, item) {
      if ($event) {
        this.$emit('remove-button-click', item);
      }
      this.closeConfirmModal();
    },
    openConfirmModal() {
      this.confirmModalView = true;
    },
    closeConfirmModal() {
      this.confirmModalView = false;
    }
  }
};
</script>
<style scoped lang="scss">
td {
  vertical-align: bottom;
}
.grid-table {
  &__wrapper {
    text-align: start;
    & > td {
      border-bottom: 1px solid $gray-2;
      padding: 6px 4px 2px;
    }
  }
  &__date {
    margin-bottom: 4px;
    font-size: 12px;
  }
  &__type {
    margin-right: 6px;
    font-size: 14px;
    font-weight: bolder;
    &.expense {
      color: $accent-color;
    }
    &.income {
      color: $sub-color;
    }
    &.balance {
      color: $gray-3;
    }
  }
  &__category {
    display: inline-block;
    font-size: 12px;
  }
  &__price {
    text-align: end;
  }
  &__remove-button {
    width: 36px;
    & > button {
      margin-left: auto;
      padding: 0;
      line-height: 20px;
      width: 20px;
      height: 20px;
    }
  }
}
</style>
