<template>
  <div class="buttons--3col">
    <Button
      v-for="button in buttonProperties"
      :key="button.id"
      :button-class="button.className"
      @click="onChange(button)"
    >
      {{ button.labelName }}<br>
      {{ button.labelPrice }}<br>
      🖊
      <Button
        :button-class="'button-delete-category'"
        @click="sendDeleteCategoryId(button.id)"
      >
        削除
      </Button>
    </Button>
  </div>
</template>
<script>
import Button from '@/components/atoms/Button.vue'

export default {
  name: 'CategoryItems',
  components: {
    Button
  },
  props: {
    buttonProperties: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    categoryItems () {
      return Object.assign([], this.categories)
    }
  },
  methods: {
    onChange (categoryItem) {
      const newCategoryItem = categoryItem.price
        ? {
          ...this.newCategoryItem,
          id: categoryItem.id,
          name: categoryItem.name,
          price: categoryItem.price
        }
        : {
          ...this.newCategoryItem,
          id: categoryItem.id,
          name: categoryItem.name
        }
      this.$emit('clickCategoryButton', newCategoryItem)
    },
    sendDeleteCategoryId (id) {
      this.$emit('clickDeleteCategoryButton', id)
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
