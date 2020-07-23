<template>
  <div>
    <Form
      :form-property="dateForm"
      :value="formsValue.date"
      @input="$emit('inputDate', $event)"
      class="forms__date-form"
    />
    <Form
      :form-property="textForm"
      v-model="formsValue.category"
      @input="$emit('inputCategory',$event )"
      class="forms__category-form"
    />
    <Form
      :form-property="priceForm"
      v-model.number="formsValue.price"
      @input="$emit('inputPrice',$event )"
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
        date: this.itemData.date,
        category: this.itemData.category,
        price: this.itemData.price,
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
  watch: {
    "itemData.date"(){
      this.formsValue.date=this.itemData.date;
    },
    "itemData.category"(){
      this.formsValue.category=this.itemData.category;
    },
    "itemData.price"(){
      this.formsValue.price=this.itemData.price;
    }
  },
};
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
