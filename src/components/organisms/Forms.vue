<template>
  <div>
    <Form
      :value="itemDate"
      :form-property="dateFormProperty"
      class="forms__date-form"
      @input="onChange($event,'inputDateForm')"
    />
    <Form
      :value="itemCategory"
      :form-property="textFormProperty"
      class="forms__category-form"
      @input="onChange($event,'inputCategoryForm')"
    />
    <Form
      :value="itemPrice"
      :form-property="priceFormProperty"
      @input="onChange($event,'inputPriceForm')"
    />
  </div>
</template>
<script>
import Form from '@/components/molecules/Form.vue'

export default {
  name: 'Forms',
  components: {
    Form
  },
  props: {
    itemDate: {
      type: String,
      required: true
    },
    itemCategory: {
      type: String,
      required: false,
      default: ''
    },
    itemPrice: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      dateFormProperty: {
        inputType: 'date',
        labelText: '日付'
      },
      textFormProperty: {
        inputType: 'text',
        labelText: '摘要',
        placeholder: '入力してください'
      },
      priceFormProperty: {
        inputType: 'number',
        labelText: '金額',
        placeholder: 0
      }
    }
  },
  computed: {
  },
  methods: {
    onChange ($event, eventName) {
      this.$emit(eventName, $event)
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
  // watch: {
  //   'itemData.date' () {
  //     this.formsValue.date = this.itemData.date
  //   },
  //   'itemData.category' () {
  //     this.formsValue.category = this.itemData.category
  //   },
  //   'itemData.price' () {
  //     this.formsValue.price = this.itemData.price
  //   }
  // }
}
</script>
<style scoped lang="scss">
.forms {
  &__date-form {
    margin-bottom: 10px;
  }
  &__category-form {
    margin-bottom: 10px;
  }
}
</style>
