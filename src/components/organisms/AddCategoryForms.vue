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
      @input="onChange($event,'price')"
    />
  </div>
</template>
<script>
import Form from '@/components/molecules/Form.vue'
export default {
  components: {
    Form
  },
  props: {
    newCategoryItem: {
      type: Object,
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
        inputType: 'number',
        labelText: '金額',
        placeholder: 0
      }
    }
  },
  methods: {
    onChange ($event, key) {
      this.$emit('inputAddCategoryForm', {
        ...this.newCategoryItem,
        [key]: $event
      })
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
