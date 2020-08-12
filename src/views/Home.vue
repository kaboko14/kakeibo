<template>
  <div class="home__container">
    <div class="home__navi">
      <router-link to="/">
        出金
      </router-link>|
      <router-link to="/income">
        入金
      </router-link>
    </div>
    <router-view
      class="home__add-item"
    />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      items: []
    }
  },
  computed: {
    itemId () {
      return this.$store.state.items.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1
    }
  },
  mounted () {
    this.items = [...this.$store.state.items]
  },
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
.home {
  &__container {
    max-width: 1100px;
    margin: 0 auto;
  }
  &__navi {
    text-align: center;
    padding: 10px;
  }
  &__add-item {
    width: 320px;
    margin: 0 auto;
    padding: 5px;
  }
}
</style>
