<template>
  <div class="home__container">
    <AddItem
      class="home__add-item"
      @clickAddItemButton="addItem"
    />
    <ItemTable
      :items="items"
      class="home__item-table"
      @click="deleteItem($event)"
    />
  </div>
</template>

<script>
import AddItem from '@/components/templates/AddItem.vue'
import ItemTable from '@/components/organisms/ItemTable.vue'

export default {
  name: 'Home',
  components: {
    AddItem,
    ItemTable
  },
  data () {
    return {
      items: [],
      itemId: 0
    }
  },
  mounted () {
    this.items = this.$ls.get('items') || []
    // itemIDをlsから呼び出したitems内の一番大きいid+1とする
    this.itemId = this.items.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1
  },
  methods: {
    addItem (item) {
      const newItem = Object.assign({}, item)
      newItem.id = this.itemId++
      this.items.push(newItem)
      this.sortItems()
      this.setItems()
    },
    sortItems () {
      this.items.sort((a, b) => {
        if (a.date > b.date) return -1
        if (a.date < b.date) return 1
        if (a.id > b.id) return -1
        if (a.id < b.id) return 1
      })
    },
    deleteItem (id) {
      this.items = this.items.filter((item) => id !== item.id)
      this.setItems()
    },
    setItems () {
      this.$ls.set('items', this.items)
    }
    // getRemainder() {
    //   let expense = this.items.reduce((result, item) => {
    //     return result + item.price;
    //   }, 0);
    //   return this.remainder - expense;
    // },
  }
}
</script>
<style scoped lang="scss">
.home {
  &__container {
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
    padding: 10px;
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
