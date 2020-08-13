<template>
  <div class="enter-buttons__container">
    <Button
      v-for="(button, index) in buttonProperties"
      :key="index"
      class="enter-buttons__button"
      :button-class="button.className"
      @click="onChange(button.value)"
    >
      {{ button.label }}
    </Button>
  </div>
</template>
<script>
import Button from '@/components/atoms/Button.vue'

export default {
  name: 'EnterButtons',
  components: {
    Button
  },
  props: {
    buttonProperties: {
      type: Array,
      required: true
    }
  },
  computed: {
    // buttonProperties () {
    //   const purposes = this.purposes
    //   return purposes.map(purpose => {
    //     return { label: purpose.toUpperCase(), className: `button-${purpose}` }
    //   })
    // }
  },
  methods: {
    onChange (value) {
      this.$emit('clickEnterButtons', value)
    }
  }
}
</script>
<style scoped lang="scss">
.enter-buttons {
  &__container {
    display: flex;
    justify-content: center;
  }
  &__button {
    max-width: 50%;
    margin-left: 10px;
    &:first-child {
      margin-left: 0px;
    }
  }
}
</style>
