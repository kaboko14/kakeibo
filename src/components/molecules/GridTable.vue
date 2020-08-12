<template>
  <tr class="grid-table__wrapper">
    <td class="grid-table__date">
      {{ item.date }}
      <div
        class="grid-table__purpose"
        :class="item.purpose"
      >
        <template v-if="item.purpose==='need'">
          NEED
        </template>
        <template v-else-if="item.purpose==='want'">
          WANT
        </template>
        <template v-else-if="item.purpose==='income'">
          入金
        </template>
        <template v-else-if="item.purpose==='balance'">
          残高調整
        </template>
      </div>
    </td>
    <td class="grid-table__category">
      {{ item.category }}
    </td>
    <td class="grid-table__price">
      {{ item.price.toLocaleString() }}
    </td>
    <td class="grid-table__delete-button">
      <Button
        :button-class="'button-delete-item'"
        @click="sendDeleteItemId(item.id)"
      >
        ×
      </Button>
    </td>
  </tr>
</template>
<script>
import Button from '@/components/atoms/Button.vue'
export default {
  name: 'GridTable',
  components: {
    Button
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    sendDeleteItemId (id) {
      this.$store.commit('deleteItem', id)
    }
  }
}
</script>
<style scoped lang="scss">
td {
  vertical-align: bottom;
}
.grid-table {
  &__wrapper {
    & > td {
      border-bottom: 1px solid #707070;
      padding: 5px 10px;
    }
  }

  &__date {
    width: 110px;
  }

  &__purpose {
    width: 70px;
    font-size: 18px;
    font-weight: bolder;
    text-align: center;
    &.need {
      color: #7dd3d9;
    }
    &.want {
      color: #d97d7d;
    }
    &.income {
      color: #d9c07d;
    }
  }

  &__price {
    text-align: end;
  }
  &__delete-button {
    width: 30px;
  }
}
</style>
