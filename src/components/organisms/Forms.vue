<template>
  <div>
    <Form
      :value="momentFormat(newItem.date)"
      :form-property="dateFormProperty"
      class="forms__date-form"
      @input="onChange($event,'date')"
    />
    <Form
      :value="newItem.category"
      :form-property="textFormProperty"
      class="forms__category-form"
      @input="onChange($event,'category')"
    />
    <Form
      :value="newItem.price"
      :form-property="priceFormProperty"
      @input="onChange($event,'price')"
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
    },
    textFormPlaceholder: {
      type: String,
      repuired: false,
      default: '入力してください'
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
        labelText: '品目',
        placeholder: this.textFormPlaceholder
      },
      priceFormProperty: {
        inputType: 'tel',
        labelText: '金額',
        placeholder: '入力してください'
      }
    }
  },
  computed: {
  },
  methods: {
    onChange ($event, key) {
      this.$emit('inputForm', {
        ...this.newItem,
        [key]: $event
      })
      console.log({
        ...this.newItem,
        [key]: $event
      })
    },
    momentFormat (date) {
      const m = moment(date, 'YYYY/MM/DD')
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
