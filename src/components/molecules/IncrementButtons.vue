<template>
  <div class="increment-buttons__container">
    <div
      v-for="(button, index) in buttonProperties"
      :key="index"
      class="increment-buttons__wrapper"
    >
      <Button
        v-if="button.active"
        :button-color="'color-gray-light '"
        class="increment-buttons__button"
        @click="incrementPrice(button.incrementNumber)"
      >
        <span class="increment-buttons__icon">
          {{ button.icon }}
        </span>
        <p>
          {{ button.label }}
        </p>
      </Button>
      <Button
        v-else
        :button-color="'color-disable'"
        class="increment-buttons__button"
      >
        <span class="increment-buttons__icon">
          {{ button.icon }}
        </span>
        <p>
          {{ button.label }}
        </p>
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button.vue';
export default {
  name: 'IncrementButtons',
  components: {
    Button
  },
  props: {
    newItem: {
      type: Object,
      required: true
    },
    buttonNumbers: {
      type: Array,
      required: true
    }
  },
  computed: {
    buttonProperties () {
      const numbers = this.buttonNumbers;
      return numbers.map(number => {
        return number > 0
          ? {
            label: `￥${number.toLocaleString()}`,
            icon: '+',
            incrementNumber: number,
            active: true
          }
          : {
            label: `￥${(-1 * number).toLocaleString()}`,
            icon: '-',
            incrementNumber: number,
            active: this.newItem.price >= number * -1
          };
      });
    }
  },
  methods: {
    incrementPrice (number) {
      const item = { ...this.newItem };
      this.$emit('increment-button-click', {
        ...item,
        price: item.price + number
      });
    }

  }
};
</script>

<style lang="scss" scoped>
.increment-buttons {
  &__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    gap: 10px;
    justify-items: center;
    align-items: center;
  }
  &__wrapper {
    width: 100%;
  }
  &__button {
    position: relative;
    padding-left: 18px;
  }
  &__icon {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    background-color: rgba(0,0,0,0.1);
    width: 18px;
    height: 100%;
    vertical-align: bottom;
  }
}

</style>
