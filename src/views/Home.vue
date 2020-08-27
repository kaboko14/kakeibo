<template>
  <div class="home__container">
    <Balance class="home__balance" />
    <Card
      :card-title="'入力'"
    >
      <RouterLinkTags
        :router-links="routerLinks"
        class="home__router-link-tags"
      />
      <router-view
        class="home__router-view"
      />
    </Card>
  </div>
</template>

<script>
import Card from '@/components/atoms/Card.vue'
import RouterLinkTags from '@/components/molecules/RouterLinkTags.vue'
import Balance from '@/components/organisms/Balance.vue'
export default {
  name: 'Home',
  components: {
    Card,
    RouterLinkTags,
    Balance
  },
  data () {
    return {
      routerLinks: [
        {
          tagLabel: '出金',
          linkTo: '/home'
        },
        {
          tagLabel: '入金',
          linkTo: '/home/income'
        }
      ]
    }
  },
  created () {
    this.$store.commit('changeActiveViewName', 'ホーム・入力')
  }
}
</script>
<style scoped lang="scss">
.home {
  &__container {
    padding: 50px 10px 70px;
    max-width: 1100px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: transparent;
  }
  &__navi {
    text-align: center;
    padding: 10px;
  }
  &__balance {
    margin-bottom: 10px;
  }
  &__router-link-tags {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }
  &__router-view {
    max-width: 380px;
    margin: 0 auto;
  }
}
</style>
