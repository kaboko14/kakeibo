<template>
  <div class="buttons--3col">
    <Button
      v-for="(item, index) in categoryItems"
      :key="index"
      :button-label="[item.name,`￥${item.price.toLocaleString()}`]"
      :button-class="buttonClass"
      @click="sendCategoryItem(item)"
    />
  </div>
</template>
<script>
import Button from "@/components/atoms/Button.vue";

export default {
  name: "CategoryButtons",
  components: {
    Button,
  },
  data() {
    return {
      //仮のカテゴリ
      categoryItems: [
        { name: "コンビニ", price: 150 },
        { name: "スーパー", price: 2000 },
        { name: "外食", price: 1000 },
        { name: "自販機", price: 130 },
        { name: "消耗品", price: 200 },
      ],
      buttonClass:"button-category"
    };
  },
  methods: {
    sendCategoryItem(item){
      this.$emit("click",item)
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
