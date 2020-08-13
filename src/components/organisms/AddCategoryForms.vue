<template>
  <div>
    <Form
      :value="newCategoryItem.name"
      :form-property="textFormProperty"
      class="add-category-forms__category-form"
      @input="onChange($event,'name')"
    />
    <Form
      :value="newCategoryItem.price"
      :form-property="priceFormProperty"
      class="add-category-forms__category-form"
      @input="onChange($event,'price')"
    />
    <EnterButtons
      :button-properties="buttonProperties"
      @clickEnterButtons="sendValue"
    />
  </div>
</template>
<script>
import Form from '@/components/molecules/Form.vue'
import EnterButtons from '@/components/molecules/EnterButtons.vue'
export default {
  components: {
    Form,
    EnterButtons
  },
  props: {
    newCategoryItem: {
      type: Object,
      required: false,
      default () {
        return {
          id: null,
          category: '',
          price: null
        }
      }
    },
    buttonProperties: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      textFormProperty: {
        inputType: 'text',
        labelText: '摘要',
        placeholder: '入力してください'
      },
      priceFormProperty: {
        inputType: 'tel',
        labelText: '金額',
        placeholder: '入力してください'
      }
    }
  },
  methods: {
    onChange ($event, key) {
      this.$emit('inputAddCategoryForm', {
        ...this.newCategoryItem,
        [key]: $event
      })
    },
    sendValue (value) {
      this.$emit('clickEnterButton', value)
    }
  }
}
</script>
<style lang="scss" scoped>
  .add-category-forms {
    &__category-form {
      margin-bottom: 10px;
    }
  }
</style>
