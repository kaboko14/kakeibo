<template>
  <table class="item-table__container">
    <GridTable
      v-for="item in items"
      :key="item.id"
      :item="item"
      @clickRemoveButton="remove($event)"
    />
  </table>
</template>
<script>
import GridTable from '@/components/molecules/GridTable.vue';
import { mapMutations } from 'vuex';
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
    ...mapMutations('items', ['remove'])
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
