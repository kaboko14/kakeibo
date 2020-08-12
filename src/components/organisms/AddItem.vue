<template>
  <div class="add-item__container">
    <CategoryButtons
      class="add-item__category-buttons"
      :new-item="newItem"
      :button-properties="addItemProperties.categoryButtonProperties"
      @clickCategoryButton="onChange"
    />
    <Forms
      class="add-item__forms"
      :text-form-placeholder="addItemProperties.initialCategory"
      :new-item="newItem"
      @inputForm="onChange"
    />
    {{ typeof newItem.price }}
    {{ newItem }}
    <IncrementButtons
      class="add-item__increment-buttons"
      :new-item="newItem"
      :button-numbers="addItemProperties.incrementButtonNumbers"
      @clickIncrementButton="onChange"
    />
    <p v-show="!newItem.price">
      ※金額を入力してください
    </p>
    <AddItemButtons
      v-show="newItem.price"
      :button-properties="addItemProperties.addItemButtonProperties"
      @clickAddItemButton="addNewItem"
    />
  </div>
</template>
<script>
import CategoryButtons from '@/components/molecules/CategoryButtons.vue'
import Forms from '@/components/organisms/Forms.vue'
import IncrementButtons from '@/components/molecules/IncrementButtons.vue'
import AddItemButtons from '@/components/molecules/AddItemButtons.vue'
import moment from 'moment'

export default {
  name: 'AddItem',
  components: {
    CategoryButtons,
    Forms,
    IncrementButtons,
    AddItemButtons
  },
  props: {
    addItemProperties: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      item: {
        date: this.moment(),
        category: '',
        price: ''
      },
      formView: false
    }
  },
  computed: {
    newItem () {
      return {
        date: this.momentFormat(this.item.date),
        category: !this.item.category
          ? ''
          : this.item.category,
        price: !this.item.price
          ? ''
          : this.item.price * 1
      }
    }
  },
  methods: {
    onChange (item) {
      this.item = item
    },
    openForm () {
      this.formView = !this.formView
    },
    addNewItem (value) {
      this.newItem.purpose = value
      if (!this.newItem.category) {
        this.newItem.category = this.addItemProperties.initialCategory
      }
      this.$emit('clickAddItemButton', this.newItem)
      this.itemInit()
    },
    itemInit () {
      this.item.date = this.moment()
      this.item.category = ''
      this.item.price = ''
    },
    moment () {
      return moment()
    },
    momentFormat (date) {
      const m = moment(date, 'YYYY-MM-DD')
      return m.format('YYYY/MM/DD')
    }
  }
}
</script>
<style scoped lang="scss">
.add-item {
  &__container {
    text-align: center;
  }
  &__category-buttons {
    margin-bottom: 20px;
  }
  &__forms {
    opacity: 1;
    margin-bottom: 20px;
  }

  &__increment-buttons {
    margin-bottom: 20px;
  }
}
</style>
