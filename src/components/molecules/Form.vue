<template>
  <div class="form__container">
      <FormLabel :label-text="formProperty.labelText" class="form__label" />
    <div class="form__wrapper">
      <Input
        :input-type="formProperty.inputType"
        :form-placeholder="formPlaceholder"
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
    formPlaceholder: {},
  },
  data() {
    return {
      formValue: null,
    };
  },
  methods: {
    sendValue(value) {
      this.formValue = value;
      this.$emit("input", this.formValue);
    },
    clearFormValue() {
      this.formValue = null;
      this.$emit("input", this.formValue);
    },
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
