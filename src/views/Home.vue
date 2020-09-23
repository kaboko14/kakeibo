<template>
  <div class="home__container">
    <Balance class="home__balance" />
    <Card
      :card-title="'入力'"
      class="home__add-item"
    >
      <RouterLinkTags
        :router-links="routerLinks"
        class="home__router-link-tags"
      />
      <transition
        name="home__fade"
        mode="out-in"
      >
        <router-view
          class="home__router-view"
        />
      </transition>
    </Card>
    <RecentlyHistory
      class="home__recentry-history"
    />
  </div>
</template>

<script>
import Card from '@/components/atoms/Card.vue';
import RouterLinkTags from '@/components/molecules/RouterLinkTags.vue';
import Balance from '@/components/organisms/Balance.vue';
import RecentlyHistory from '@/components/organisms/RecentlyHistory.vue';
export default {
  name: 'Home',
  components: {
    Card,
    RouterLinkTags,
    Balance,
    RecentlyHistory
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
    };
  },
  created () {
    this.$store.commit('updateActiveViewName', 'ホーム・入力');
  }
};
</script>
<style scoped lang="scss">
.home__fade-enter-active {
  animation: fade-in 0.1s ease-out;
}
.home__fade-leave-active {
  animation: fade-in 0.1s ease-in reverse;
}
.home {
  &__container {
    padding: 54px 10px 70px;
    max-width: $view-max-width;
    min-height: 100vh;
    margin: 0 auto;
    background-color: transparent;
  }
  &__navi {
    text-align: center;
    padding: 10px;
  }
  &__balance {
    margin-bottom: $card-margin-bottom;
  }
  &__add-item {
    margin-bottom: $card-margin-bottom;
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
