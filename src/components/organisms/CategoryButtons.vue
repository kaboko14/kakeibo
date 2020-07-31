<template>
  <div class="buttons--3col">
    <Button
      v-for="(button, index) in buttonPropertys"
      :key="index"
      :button-class="button.className"
      @click="onChange(categoryItems[index])"
    >
      {{ button.labelName }}<br>
      {{ button.labelPrice }}
    </Button>
  </div>
</template>
<script>
import Button from '@/components/atoms/Button.vue'

// 仮カテゴリ
const categorys = [
  { name: 'コンビニ', price: 150 },
  { name: 'スーパー', price: 2000 },
  { name: '外食', price: 1000 },
  { name: '自販機', price: 130 },
  { name: '消耗品', price: 200 }
]

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
    categoryItems () {
      return Object.assign([], categorys)
    },
    buttonPropertys () {
      return this.categoryItems.map(item => {
        return {
          labelName: item.name,
          labelPrice: `￥${item.price.toLocaleString()}`,
          className: 'button-category'
        }
      })
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
