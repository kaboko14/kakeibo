<template>
  <table class="item-table__container">
    <GridTable
      v-for="item in items"
      :key="item.id"
      :item="item"
      @remove-button-click="removeItem"
    />
  </table>
</template>
<script>
import GridTable from '@/components/molecules/GridTable.vue';
import { mapActions } from 'vuex';
import { formatDate } from '@/utils';
export default {
  name: 'ItemTable',
  components: {
    GridTable
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions('items', ['remove']),
    ...mapActions('balance', ['deposit']),
    removeItem (item) {
      const itemCategory = item.type === 'balance'
        ? '残高調整'
        : item.category;
      if (confirm(`"${formatDate(item.date)} ${itemCategory} ￥${item.price.toLocaleString()}" を削除しますか？`)) {
        this.remove(item);
        this.deposit(item.price * -1);
      }
    }
  }
};
</script>
<style scoped lang="scss">
.item-table {
  &__container {
    width: 100%;
    table-layout: fixed;
  }
}

</style>
