<template>
  <div class="buttons--3col">
    <Button
      v-for="(number, index) in incrementNumbers"
      :key="index"
      :button-label="number>0?[`+￥${number.toLocaleString()}`]:[`-￥${(-1*number).toLocaleString()}`]"
      :button-class="number > 0 ? plusButtonClass : minusButtonClass"
      @click="sendIncrementNumber(number)"
    />
  </div>
</template>

<script>
import Button from "@/components/atoms/Button.vue";
export default {
  name: "IncrementButtons",
  components: {
    Button,
  },
  data() {
    return {
      incrementNumbers: [1000, 100, 10, -1000, -100, -10],
      plusButtonClass: "button-plus",
      minusButtonClass: "button-minus",
    };
  },
  methods: {
    sendIncrementNumber(number){
      this.$emit("click",number)
    }
  },
};
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
