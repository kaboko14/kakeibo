<template>
  <tr class="grid-table__wrapper">
    <td>
      <p
        class="grid-table__date"
      >
        {{ momentFromatJa(itemDate) }}
      </p>
      <span
        class="grid-table__type"
        :class="item.type"
      >
        <template v-if="item.type==='expense'">
          出金
        </template>
        <template v-else-if="item.type==='income'">
          入金
        </template>
        <template v-else-if="item.type==='balance'">
          残高調整
        </template>
      </span>
      <span class="grid-table__category">
        {{ item.category }}
      </span>
    </td>
    <td class="grid-table__price">
      ￥{{ item.price.toLocaleString() }}
    </td>
    <td class="grid-table__remove-button">
      <Button
        :button-color="'color-gray-dark'"
        @click="sendRemoveItem(item)"
      >
        <p>
          ×
        </p>
      </Button>
    </td>
  </tr>
</template>
<script>
import Button from '@/components/atoms/Button.vue'
import moment from 'moment'
moment.updateLocale('ja', {
  weekdaysShort: ['日', '月', '火', '水', '木', '金', '土']
})
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
  computed: {
    itemDate () {
      return { ...this.item }.date
    }
  },
  methods: {
    sendRemoveItem (item) {
      this.$emit('clickRemoveButton', item)
    },
    momentFromatJa (date) {
      const m = moment(date, 'YYYY-MM-DD')
      return m.format('M/D(ddd)')
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
    text-align: start;
    & > td {
      border-bottom: 1px solid #707070;
      padding: 6px 4px 2px;
    }
  }
  &__date {
    margin-bottom: 4px;
    font-size: 12px;
  }
  &__type {
    margin-right: 6px;
    font-size: 14px;
    font-weight: bolder;
    &.expense {
      color: $accent-color;
    }
    &.income {
      color: $sub-color;
    }
    &.balance {
      color: $gray-3;
    }
  }
  &__category {
    display: inline-block;
    font-size: 12px;
  }
  &__price {
    text-align: end;
  }
  &__remove-button {
    width: 36px;
    text-align: end;
    & > button {
      margin-left: auto;
      padding: 0;
      line-height: 20px;
      width: 20px;
      height: 20px;
    }
  }
}
</style>
