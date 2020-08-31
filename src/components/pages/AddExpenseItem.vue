<template>
  <AddItem
    :add-item-properties="addItemProperties"
    class="home__add-item"
    @clickAddItemButton="add"
  />
</template>

<script>
import AddItem from '@/components/organisms/AddItem.vue'
import { mapMutations } from 'vuex'
export default {
  name: 'AddExpenseItem',
  components: {
    AddItem
  },
  data () {
    return {
      initialCategory: '出金',
      incrementButtons: [1000, 500, 100, -1000, -500, -100],
      addItemButtonLabel: '出金を登録する',
      itemType: 'expense'

    }
  },
  computed: {
    addItemProperties () {
      return {
        initialCategory: this.initialCategory,
        categoryButtonProperties: this.$store.getters
          .expenseCategoryButtonProperties,
        incrementButtonNumbers: this.incrementButtons,
        addItemButtonLabel: this.addItemButtonLabel,
        itemType: this.itemType
      }
    }
  },
  methods: {
    ...mapMutations('items', ['add'])
  }
}
</script>
