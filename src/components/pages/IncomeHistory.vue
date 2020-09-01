<template>
  <div>
    <ItemTable
      :items="incomeItems"
    />
  </div>
</template>
<script>
import ItemTable from '@/components/organisms/ItemTable.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'IncomeHistory',
  components: {
    ItemTable
  },
  computed: {
    ...mapGetters('items', ['incomeItems'])
  }
};
</script>
