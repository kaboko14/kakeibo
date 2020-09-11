<template>
  <div>
    <Form
      :value="categoryItem.name"
      :form-property="textFormProperty"
      class="add-category-forms__category-form"
      @input="onChange($event,'name')"
    />
    <Form
      :value="categoryItem.price"
      :form-property="priceFormProperty"
      @input="onChange($event,'price')"
    />
    <div class="add-category-forms__button-container">
      <slot />
    </div>
  </div>
</template>
<script>
import Form from '@/components/molecules/Form.vue';
export default {
  components: {
    Form
  },
  props: {
    categoryItem: {
      type: Object,
      required: false,
      default () {
        return {
          id: null,
          name: '',
          price: null
        };
      }
    }
  },
  data () {
    return {
      textFormProperty: {
        inputType: 'text',
        labelText: '品目',
        placeholder: '入力してください'
      },
      priceFormProperty: {
        inputType: 'tel',
        labelText: '金額',
        placeholder: '入力してください'
      }
    };
  },
  methods: {
    onChange ($event, key) {
      this.$emit('add-category-form-input', {
        ...this.categoryItem,
        [key]: $event
      });
    }
  }
};
</script>
<style lang="scss" scoped>
  div .add-category-forms {
    &__category-form {
      margin-bottom: 10px;
    }
    &__button-container {
      margin-top: 20px;
      text-align: center;
    }
  }
</style>
