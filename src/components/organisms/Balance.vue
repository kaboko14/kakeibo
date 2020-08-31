<template>
  <Card
    :card-title="'おおよそ残高'"
    class="balance"
  >
    <div class="balance__wrapper">
      <WalletIcon class="balance__wallet-icon" />
      <p class="balance__balance">
        ￥{{ balance }}
      </p><br>
      <Button
        class="balance__button"
        :button-class="'button--color-sub'"
      >
        <p>
          残高を合わせる
        </p>
      </Button>
    </div>
  </Card>
</template>
<script>
import Card from '@/components/atoms/Card.vue'
import WalletIcon from '@/components/icons/WalletIcon.vue'
import Button from '@/components/atoms/Button.vue'
export default {
  name: 'Balance',
  components: {
    Card,
    WalletIcon,
    Button
  },
  computed: {
    balance () {
      return this.$store.getters.balance.toLocaleString()
    }
  }
}
</script>
<style lang="scss" scoped>
  .balance {
    &__wrapper {
      text-align: center;
    }
    &__wallet-icon {
      width: 24px;
      height: 24px;
      margin-bottom: 10px;
      display: inline-block;
      fill: $font-color-bk;
    }
    &__balance {
      display: inline-block;
      font-size: 28px;
      margin-bottom: 10px;
      vertical-align: bottom;
    }
  }
</style>
