<template>
  <div class="home__container">
    <AddItem @click="addItem($event)" class="home__add-item" />
    <ItemTable
      :items="items"
      class="home__item-table"
      @click="deleteItem($event)"
    />
  </div>
</template>

<script>
import AddItem from "@/components/templates/AddItem.vue";
import ItemTable from "@/components/organisms/ItemTable.vue";

export default {
  name: "Home",
  components: {
    AddItem,
    ItemTable,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    addItem(item) {
      this.items.push(Object.assign({}, item));
      this.items.sort((a, b) => {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
      });
    },
    deleteItem(id) {
      this.items = this.items.filter((item) => id !== item.id);
    },
    // getRemainder() {
    //   let expense = this.items.reduce((result, item) => {
    //     return result + item.price;
    //   }, 0);
    //   return this.remainder - expense;
    // },
  },
};
</script>
<style scoped lang="scss">
.home {
  &__container {
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
    padding: 10px;
    justify-content: space-between;
  }
  &__add-item {
    width: 30%;
    min-width: 320px;
    padding: 10px;
  }
  &__item-table {
    width: 65%;
  }
}
</style>
