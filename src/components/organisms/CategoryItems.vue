<template>
  <div>
    <div
      v-for="button in buttonProperties"
      :key="button.id"
      class="category-items__container"
    >
      <Button
        :button-class="button.className"
        style="width:200px"
      >
        {{ button.labelName }}<br>
        {{ button.labelPrice }}
      </Button>
      <Button
        :button-class="'button-delete-item'"
        class="category-items__delete-button"
        @click="sendDeleteCategoryItemId(button.id)"
      >
        ×
      </Button>
    </div>
  </div>
</template>
<script>
import Button from '@/components/atoms/Button.vue'

export default {
  name: 'CategoryItems',
  components: {
    Button
  },
  data () {
    return {
    }
  },
  computed: {
    categoryItems () {
      return Object.assign([], this.categories)
    },
    buttonProperties () {
      return this.$store.getters.categoryButtonProperties
    }
  },
  methods: {
    sendDeleteCategoryItemId (id) {
      this.$emit('clickDeleteCategoryItemButton', id)
    }
  }
}
</script>
<style lang="scss" scoped>
.category-items {
  &__container {
    display: flex;
    margin-bottom: 10px;
    align-items: flex-end;
  }
  &__delete-button {
    margin-left: 6px;
  }
}
</style>
