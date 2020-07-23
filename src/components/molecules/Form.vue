<template>
  <div class="form__container">
      <FormLabel :label-text="formProperty.labelText" class="form__label" />
    <div class="form__wrapper">
      <Input
        :input-type="formProperty.inputType"
        :value="formValue"
        @input="sendValue($event)"
      />
      <FormClearButton
        v-show="formProperty.inputType !== 'date'"
        class="form__clear-button"
        @click="clearFormValue()"
      />
    </div>
  </div>
</template>
<script>
import FormLabel from "@/components/atoms/FormLabel.vue";
import Input from "@/components/atoms/Input.vue";
import FormClearButton from "@/components/atoms/FormClearButton.vue";
export default {
  name: "Form",
  components: {
    Input,
    FormLabel,
    FormClearButton,
  },
  props: {
    formProperty: {
      type: Object,
    },
    value: {},
  },
  data() {
    return {
      formValue: this.value,
    };
  },
  methods: {
    sendValue(value) {
      this.$emit("input", value);
    },
    clearFormValue() {
      this.formValue = null;
    },
  },
  watch: {
    value(){
      this.formValue=this.value;
    }
  },
};
</script>
<style scoped lang="scss">
.form {
  &__wrapper {
    display: inline-block;
    position: relative;
    width: 80%;
    border-radius: 4px;
    overflow: hidden;
    vertical-align: top;
    white-space: nowrap;
  }
  &__clear-button {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
