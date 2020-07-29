<template>
  <div class="add-item__container">
    <CategoryButtons
      class="add-item__category-buttons"
      @clickCategoryButton="[ChangeData($event.name,'category'),ChangeData($event.price,'price')]"
    />
    <div class="add-item__preview-container">
      <ItemPreview
        class="add-item__item-preview"
        :new-item="newItem"
      />
      <Button
        button-class="button-edit"
        class="add-item__form-open-button"
        @click="openForm()"
      >
        フォーム入力
      </Button>
    </div>
    <Forms
      class="add-item__forms"
      :new-item="newItem"
      :class="{formview : formView}"
      @inputDateForm="ChangeData($event,'date')"
      @inputCategoryForm="ChangeData($event,'category')"
      @inputPriceForm="ChangeData($event,'price')"
    />
    <IncrementButtons
      class="add-item__increment-buttons"
      @clickIncrementButton="incrementPrice"
    />
    <AddItemButtons
      @clickAddItemButton="addNewItem"
    />
  </div>
</template>
<script>
import CategoryButtons from '@/components/organisms/CategoryButtons.vue'
import ItemPreview from '@/components/atoms/ItemPreview.vue'
import Button from '@/components/atoms/Button.vue'
import Forms from '@/components/organisms/Forms.vue'
import IncrementButtons from '@/components/organisms/IncrementButtons.vue'
import AddItemButtons from '@/components/organisms/AddItemButtons.vue'
import moment from 'moment'

export default {
  name: 'AddItem',
  components: {
    CategoryButtons,
    ItemPreview,
    Button,
    Forms,
    IncrementButtons,
    AddItemButtons
  },
  props: {
  },
  data () {
    return {
      date: this.moment(),
      category: 'その他',
      price: 0,
      formView: false
    }
  },
  computed: {
    newItem () {
      return {
        date: this.momentFormat(this.date),
        category: !this.category
          ? ''
          : this.category,
        price: !this.price
          ? 0
          : this.price
      }
    }
  },
  methods: {
    ChangeData ($event, property) {
      this[property] = $event
    },
    incrementPrice (number) {
      this.price *= 1
      this.price += number
    },
    openForm () {
      this.formView = !this.formView
    },
    addNewItem (value) {
      this.newItem.purpose = value
      this.$emit('clickAddItemButton', this.newItem)
      this.itemInit()
    },
    itemInit () {
      this.date = this.moment()
      this.category = 'その他'
      this.price = 0
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
  &__preview-container {
    display: flex;
    margin-bottom: 20px;
    align-items: flex-end;
  }

  &__item-preview {
    flex: 3;
  }

  &__form-open-button {
    margin-left: 10px;
    // margin-bottom: 0px;
    flex: 1;
  }

  &__forms {
    max-height: 0px;
    opacity: 0;
    overflow: hidden;
    transition: all 0.3s ease;

    &.formview {
      max-height: 400px;
      margin-bottom: 20px;
      opacity: 1;
    }
  }

  &__increment-buttons {
    margin-bottom: 20px;
  }
}
</style>
