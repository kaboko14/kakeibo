<template>
  <div>
    <ItemTable
      :items="expenseItems"
    />
  </div>
</template>
<script>
import ItemTable from '@/components/organisms/ItemTable.vue'
export default {
  name: 'ExpenseHistory',
  components: {
    ItemTable
  },
  computed: {
    items () {
      return [...this.$store.state.items]
    },
    expenseItems () {
      return this.items.filter(item => item.purpose === 'want' || item.purpose === 'need')
    }
  }

}
</script>
