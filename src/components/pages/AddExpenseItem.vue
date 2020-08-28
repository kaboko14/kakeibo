<template>
  <AddItem
    :add-item-properties="addItemProperties"
    class="home__add-item"
    @clickEnterButtons="add"
  />
</template>

<script>
import AddItem from '@/components/organisms/AddItem.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapMutations } = createNamespacedHelpers('items')

export default {
  name: 'AddExpenseItem',
  components: {
    AddItem
  },
  data () {
    return {
      initialCategory: '出金',
      incrementButtons: [1000, 500, 100, -1000, -500, -100],
      addItemButtons: [
        {
          label: 'NEED',
          value: 'need',
          className: 'button-need'
        },
        {
          label: 'WANT',
          value: 'want',
          className: 'button-want'
        }
      ]
    }
  },
  computed: {
    addItemProperties () {
      return {
        initialCategory: this.initialCategory,
        categoryButtonProperties: this.$store.getters
          .expenseCategoryButtonProperties,
        incrementButtonNumbers: this.incrementButtons,
        addItemButtonProperties: this.addItemButtons
      }
    }
  },
  methods: {
    ...mapMutations(['add'])
  }
}
</script>
<style scoped lang="scss"></style>
