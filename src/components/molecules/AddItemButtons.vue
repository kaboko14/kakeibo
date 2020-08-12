<template>
  <div class="buttons--2col">
    <Button
      v-for="(button, index) in buttonProperties"
      :key="index"
      :button-class="button.className"
      @click="onChange(button.purpose)"
    >
      {{ button.label }}
    </Button>
  </div>
</template>
<script>
import Button from '@/components/atoms/Button.vue'

export default {
  name: 'AddItemButtons',
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
      this.$emit('clickAddItemButton', value)
    }
  }
}
</script>
<style scoped lang="scss">
.buttons--2col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
</style>
