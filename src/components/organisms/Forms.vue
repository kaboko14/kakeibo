<template>
  <div>
    <Form
      :value="momentFormat()"
      :form-property="dateFormProperty"
      class="forms__date-form"
      @input="onChange($event,'inputDateForm')"
    />
    <Form
      :value="newItem.category"
      :form-property="textFormProperty"
      class="forms__category-form"
      @input="onChange($event,'inputCategoryForm')"
    />
    <Form
      :value="newItem.price"
      :form-property="priceFormProperty"
      @input="onChange($event,'inputPriceForm')"
    />
  </div>
</template>
<script>
import Form from '@/components/molecules/Form.vue'
import moment from 'moment'

export default {
  name: 'Forms',
  components: {
    Form
  },
  props: {
    newItem: {
      type: Object,
      required: true
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
    momentFormat () {
      const itemDate = this.newItem.date
      const m = moment(itemDate, 'YYYY/MM/DD')
      return m.format('YYYY-MM-DD')
    }
  }
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
