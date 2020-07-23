<template>
  <table class="item-table__container">
    <GridTable v-for="(item, index) in items" :key="index" :item="item"
    @click="sendDeleteItemId($event)"/>
  </table>
</template>
<script>
import GridTable from "@/components/molecules/GridTable.vue";
export default {
  name: "ItemTable",
  components: {
    GridTable,
  },
  props: {
    items: {
      type: Array,
    },
  },
  methods: {
    sendDeleteItemId(id){
      this.$emit("click",id)
    }
  },
};
</script>
<style scoped lang="scss">
.item-table {
  &__container {
    width: 100%;
  }
}


</style>
