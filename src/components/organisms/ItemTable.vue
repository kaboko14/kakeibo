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
import { mapActions, mapMutations } from 'vuex';
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
    ...mapMutations('items', ['remove']),
    ...mapActions('balance', ['deposit']),
    removeItem (item) {
      this.remove(item);
      this.deposit(item.price * -1);
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
