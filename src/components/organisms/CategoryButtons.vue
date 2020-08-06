<template>
  <div class="buttons--3col">
    <Button
      v-for="button in buttonProperties"
      :key="button.id"
      :button-class="button.className"
      @click="onChange(button)"
    >
      {{ button.labelName }}<br>
      {{ button.labelPrice }}
    </Button>
  </div>
</template>
<script>
import Button from '@/components/atoms/Button.vue'

export default {
  name: 'CategoryButtons',
  components: {
    Button
  },
  props: {
    newItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    buttonProperties () {
      return this.$store.getters.categoryButtonProperties
    }
  },
  methods: {
    onChange (item) {
      this.$emit('clickCategoryButton', {
        ...this.newItem,
        category: item.name,
        price: item.price
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.buttons--3col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;
  align-items: center;
}
</style>
