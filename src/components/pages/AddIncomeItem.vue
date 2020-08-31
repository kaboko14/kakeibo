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
      initialCategory: '入金',
      incrementButtons: [10000, 5000, 1000, -10000, -5000, -1000],
      addItemButtonLabel: '入金を登録する',
      itemType: 'income'

    }
  },
  computed: {
    addItemProperties () {
      return {
        initialCategory: this.initialCategory,
        categoryButtonProperties: this.$store.getters
          .incomeCategoryButtonProperties,
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
