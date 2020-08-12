<template>
  <AddItem
    :add-item-properties="addItemProperties"
    class="home__add-item"
    @clickAddItemButton="addItem"
  />
</template>

<script>
import AddItem from '@/components/organisms/AddItem.vue'

export default {
  name: 'AddIncomeItem',
  components: {
    AddItem
  },
  data () {
    return {
      initialCategory: '入金',
      incrementButton: [10000, 5000, 1000, -10000, -5000, -1000],
      addItemButton: [
        {
          label: '入金',
          purpose: 'income',
          className: 'button-income'
        }
      ]
    }
  },
  computed: {
    items () {
      return [...this.$store.state.items]
    },
    itemId () {
      return this.items.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1
    },
    addItemProperties () {
      return {
        initialCategory: this.initialCategory,
        categoryButtonProperties: this.$store.getters.incomeCategoryButtonProperties,
        incrementButtonNumbers: this.incrementButton,
        addItemButtonProperties: this.addItemButton
      }
    }
  },
  // mounted () {
  //   this.items = [...this.$store.state.items]
  // },
  methods: {
    addItem (item) {
      const newItem = Object.assign({}, item)
      newItem.id = this.itemId
      this.items.push(newItem)
      this.sortItems()
      this.$store.commit('updateItems', [...this.items])
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
      this.$store.commit('updateItems', [...this.items])
    }
    // setItems () {
    //   this.$ls.set('items', this.items)
    // }
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
</style>
