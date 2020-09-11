<template>
  <AddItem
    :add-item-properties="addItemProperties"
    class="home__add-item"
    @add-item-button-click="addItem"
  />
</template>

<script>
import AddItem from '@/components/organisms/AddItem.vue';
import { mapGetters, mapActions } from 'vuex';
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

    };
  },
  computed: {
    ...mapGetters('incomes', ['buttonProperties']),
    addItemProperties () {
      return {
        initialCategory: this.initialCategory,
        categoryButtonProperties: this.buttonProperties,
        incrementButtonNumbers: this.incrementButtons,
        addItemButtonLabel: this.addItemButtonLabel,
        itemType: this.itemType
      };
    }
  },
  methods: {
    ...mapActions('items', ['add']),
    ...mapActions('balance', ['deposit']),
    addItem(item) {
      this.add(item);
      this.deposit(item.price);
    }
  }
};
</script>
