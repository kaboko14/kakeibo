<template>
  <div class="add-item__container">
    <CategoryButtons
      class="add-item__category-buttons"
      :new-item="newItem"
      :button-properties="addItemProperties.categoryButtonProperties"
      @category-button-click="onChange"
    />
    <Forms
      class="add-item__forms"
      :text-form-placeholder="addItemProperties.initialCategory"
      :new-item="newItem"
      @inputForm="onChange"
    />
    <IncrementButtons
      class="add-item__increment-buttons"
      :new-item="newItem"
      :button-numbers="addItemProperties.incrementButtonNumbers"
      @clickIncrementButton="onChange"
    />
    <p v-show="!newItem.price">
      ※金額を入力してください
    </p>
    <Button
      v-show="newItem.price"
      class="add-item__add-item-button"
      :button-color="'color-sub'"
      @click="addNewItem"
    >
      <p>
        {{ addItemProperties.addItemButtonLabel }}
      </p>
    </Button>
  </div>
</template>
<script>
import Button from '@/components/atoms/Button.vue'
import CategoryButtons from '@/components/molecules/CategoryButtons.vue'
import Forms from '@/components/organisms/Forms.vue'
import IncrementButtons from '@/components/molecules/IncrementButtons.vue'
import moment from 'moment'

export default {
  name: 'AddItem',
  components: {
    Button,
    CategoryButtons,
    Forms,
    IncrementButtons
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
        date: this.item.date,
        category: !this.item.category ? '' : this.item.category,
        price:
          !this.item.price || this.item.price <= 0 ? '' : this.item.price * 1
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
    addNewItem () {
      this.newItem.type = this.addItemProperties.itemType
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
      return m.format('YYYY-MM-DD')
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
  &__add-item-button {
    font-weight: bold;
    padding: 10px;
  }
}
</style>
