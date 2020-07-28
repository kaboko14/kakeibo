<template>
  <div class="add-item__container">
    <CategoryButtons
      class="add-item__category-buttons"
      @clickCategoryButton="[ChangeData($event.name,'category'),ChangeData($event.price,'price')]"
    />
    <div class="add-item__preview-container">
      <ItemPreview
        class="add-item__item-preview"
        :item-date="newItem.date"
        :item-category="newItem.category"
        :item-price="newItem.price"
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
      :item-date="newItem.date"
      :item-category="newItem.category"
      :item-price="newItem.price"
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

export default {
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
      date: this.getDate(),
      category: 'その他',
      price: 0,
      formView: false
    }
  },
  computed: {
    newItem () {
      return {
        date: this.date,
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
    },
    getDate () {
      const today = new Date()
      const year = today.getFullYear()
      const month = today.getMonth() + 1
      const day = today.getDate()
      function getNumber (num, digit) {
        num = String(num)
        if (num.length < digit) {
          num = '0' + num
        }
        return num
      }
      const yyyy = getNumber(year, 4)
      const mm = getNumber(month, 2)
      const dd = getNumber(day, 2)
      return `${yyyy}-${mm}-${dd}`
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
