<template>
  <div>
    <ItemTable
      :items="expenseItems"
    />
  </div>
</template>
<script>
import ItemTable from '@/components/organisms/ItemTable.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'ExpenseHistory',
  components: {
    ItemTable
  },
  computed: {
    ...mapGetters('items', ['expenseItems'])
  }
};
</script>
