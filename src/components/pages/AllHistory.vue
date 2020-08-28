<template>
  <div>
    <ItemTable
      :items="items"
    />
  </div>
</template>
<script>
import ItemTable from '@/components/organisms/ItemTable.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('items')

export default {
  name: 'IncomeHistory',
  components: {
    ItemTable
  },
  computed: {
    ...mapState({
      items: state => state.list
    })
  }
}
</script>
