<template>
  <div class="buttons--3col">
    <Button
      v-for="(button, index) in buttonPropertys"
      :key="index"
      :button-class="button.className"
      @click="sendIncrementNumber(button.num)"
    >
      {{ button.label }}
    </Button>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button.vue'
export default {
  name: 'IncrementButtons',
  components: {
    Button
  },
  data () {
    return {
      incrementNumbers: [1000, 100, 10, -1000, -100, -10]
    }
  },
  computed: {
    buttonPropertys () {
      const numbers = this.incrementNumbers
      return numbers.map(number => {
        return number > 0
          ? {
            label: `+￥${number.toLocaleString()}`,
            num: number,
            className: 'button-plus'
          }
          : {
            label: `-￥${(-1 * number).toLocaleString()}`,
            num: number,
            className: 'button-minus'
          }
      })
    }
  },
  methods: {
    sendIncrementNumber (number) {
      this.$emit('clickIncrementButton', number)
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
