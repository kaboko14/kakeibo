<template>
  <AddItem
    :add-item-properties="addItemProperties"
    class="home__add-item"
    @add-item-button-click="addItem"
  />
</template>

<script>
import AddItem from '@/components/organisms/AddItem.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
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

    };
  },
  computed: {
    ...mapGetters('expenses', ['buttonProperties']),
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
    ...mapMutations('balance', ['calculate']),
    addItem(item) {
      this.add(item);
      this.calculate(item.price * -1);
    }
  }
};
</script>
