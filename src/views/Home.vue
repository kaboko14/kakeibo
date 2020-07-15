<template>
  <div class="home home-container">
    <AddItem @my-click="addItem" />
    <div class="container-rigth">
      <Remainder :remainder="getRemainder()" />
      <ItemTable @my-click="deleateItem" :items="items" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddItem from "@/components/AddItem.vue";
import ItemTable from "@/components/ItemTable.vue";
import Remainder from "@/components/Remainder.vue";

export default {
  name: "Home",
  components: {
    AddItem,
    ItemTable,
    Remainder
  },
  data() {
    return {
      items: [],

      //仮の残高
      remainder: 10000
    };
  },
  methods: {
    addItem(object) {
      let item = { ...object };
      this.items.push(item);
      this.items.sort((a, b) => {
        return a.date < b.date ? 1 : -1;
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
