<template>
  <tr class="grid-table__wrapper">
    <td>
      <p
        class="grid-table__date"
      >
        {{ momentFromatJa(itemDate) }}
      </p>
      <span
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
        :button-class="'button--color-gray-dark'"
        @click="sendDeleteItemId(item.id)"
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
    sendDeleteItemId (id) {
      this.$store.commit('deleteItem', id)
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
  &__purpose {
    margin-right: 6px;
    font-size: 14px;
    font-weight: bolder;
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
  &__category {
    display: inline-block;
    font-size: 12px;
  }
  &__price {
    text-align: end;
  }
  &__remove-button {
    width: 36px;
    & > button {
      margin-left: auto;
      padding: 0;
      line-height: 26px;
      border-radius: 50%;
      width: 26px;
      height: 26px;
    }
  }
}
</style>
