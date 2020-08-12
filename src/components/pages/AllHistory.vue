<template>
  <div>
    <ItemTable
      :items="items"
    />
  </div>
</template>
<script>
import ItemTable from '@/components/organisms/ItemTable.vue'
export default {
  name: 'IncomeHistory',
  components: {
    ItemTable
  },
  computed: {
    items () {
      return this.$store.state.items
    }
  }
}
</script>
