<template>
    <div>
      <AddItem @click="addItem($event)"/>
      <ItemTable
      :items="items"/>
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
    deleateItem(index) {
      this.items.splice(index, 1);
    },
    getRemainder() {
      let expense = this.items.reduce((result, item) => {
        return result + item.price;
      }, 0);
      return this.remainder - expense;
    }
  }
};
</script>
<style scoped>
  .home-container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .container-rigth {
    width: 100%;
  }


</style>
