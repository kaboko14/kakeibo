<template>
  <AddItem
    :add-item-properties="addItemProperties"
    class="home__add-item"
    @clickEnterButtons="addItem"
  />
</template>

<script>
import AddItem from '@/components/organisms/AddItem.vue'
import { sortByDate } from '@/utils'

export default {
  name: 'AddIncomeItem',
  components: {
    AddItem
  },
  data () {
    return {
      initialCategory: '入金',
      incrementButtons: [10000, 5000, 1000, -10000, -5000, -1000],
      addItemButtons: [
        {
          label: '入金',
          value: 'income',
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
      return (
        this.items.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1
      )
    },
    addItemProperties () {
      return {
        initialCategory: this.initialCategory,
        categoryButtonProperties: this.$store.getters
          .incomeCategoryButtonProperties,
        incrementButtonNumbers: this.incrementButtons,
        addItemButtonProperties: this.addItemButtons
      }
    }
  },
  methods: {
    addItem (item) {
      const newItem = Object.assign({}, item)
      newItem.id = this.itemId
      this.items.push(newItem)
      sortByDate(this.items)
      this.$store.commit('updateItems', [...this.items])
    },
    deleteItem (id) {
      this.items = this.items.filter((item) => id !== item.id)
      this.$store.commit('updateItems', [...this.items])
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
<style scoped lang="scss"></style>
