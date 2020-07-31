<template>
  <div class="add-item__container">
    <CategoryButtons
      class="add-item__category-buttons"
      :new-item="newItem"
      @clickCategoryButton="onChange"
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
      @inputForm="onChange"
    />
    <IncrementButtons
      class="add-item__increment-buttons"
      :new-item="newItem"
      @clickIncrementButton="onChange"
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
      item: {
        date: this.moment(),
        category: 'その他',
        price: 0
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
          ? 0
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
      this.$emit('clickAddItemButton', this.newItem)
      this.itemInit()
    },
    itemInit () {
      this.item.date = this.moment()
      this.item.category = 'その他'
      this.item.price = 0
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
