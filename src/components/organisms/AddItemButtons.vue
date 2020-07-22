<template>
  <div class="buttons--2col">
    <Button
      v-for="(value, index) in purpose"
      :key="index"
      :button-label="[value.toUpperCase()]"
      :button-class="`button-${value}`"
      @click="sendValue(value)"
    />
  </div>
</template>
<script>
import Button from "@/components/atoms/Button.vue";

export default {
  name: "AddItemButtons",
  components: {
    Button,
  },
  data() {
    return {
      purpose: ["need", "want"],
    };
  },
  methods: {
    sendValue(value){
      this.$emit("click",value)
    }
  },
};
</script>
<style scoped lang="scss">
.buttons--2col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
</style>
