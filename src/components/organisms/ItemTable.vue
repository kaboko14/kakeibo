<template>
  <table class="item-table__container">
    <GridTable
      v-for="item in items"
      :key="item.id"
      :item="item"
      @clickDeleteItemButton="sendDeleteItemId"
    />
  </table>
</template>
<script>
import GridTable from '@/components/molecules/GridTable.vue'
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
    sendDeleteItemId (id) {
      console.log(id)
      this.$emit('clickDeleteItemButton', id)
    }
  }
}
</script>
<style scoped lang="scss">
.item-table {
  &__container {
    width: 100%;
    table-layout: fixed;
  }
}

</style>
