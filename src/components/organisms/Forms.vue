<template>
  <div>
    <Form
      :form-property="dateForm"
      :form-placeholder="itemData.date"
      v-model="formsValue.date"
      @input="$emit('inputDate', $event)"
      class="forms__form"
    />
    <Form
      :form-property="textForm"
      :form-placeholder="itemData.category"
      v-model="formsValue.category"
      @input="$emit('inputCategory', $event)"
      class="forms__form"
    />
    <Form
      :form-property="priceForm"
      :form-placeholder="itemData.price"
      v-model="formsValue.price"
      @input="$emit('inputPrice', $event)"
    />
  </div>
</template>
<script>
import Form from "@/components/molecules/Form.vue";

export default {
  name: "Forms",
  components: {
    Form,
  },
  props: {
    itemData: {
      type: Object,
    },
  },
  data() {
    return {
      formsValue: {
        date: "",
        category: "",
        price: 0,
      },
      dateForm: {
        inputType: "date",
        labelText: "日付",
      },
      textForm: {
        inputType: "text",
        labelText: "摘要",
      },
      priceForm: {
        inputType: "number",
        labelText: "金額",
      },
    };
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.forms {
  &__form {
    margin-bottom: 10px;
  }
}
</style>
