<template>
  <div class="history__container">
    <RouterLinkTags
      class="history__router-link-tags"
      :router-links="routerLinks"
    />
    <router-view
      class="history__router-view"
    />
  </div>
</template>

<script>
import RouterLinkTags from '@/components/molecules/RouterLinkTags.vue';

export default {
  name: 'History',
  components: {
    RouterLinkTags
  },
  data () {
    return {
      routerLinks: [
        {
          tagLabel: '全て',
          linkTo: '/history'
        },
        {
          tagLabel: '出金',
          linkTo: '/history/expense'
        },
        {
          tagLabel: '入金',
          linkTo: '/history/income'
        }
      ]
    };
  },
  created () {
    this.$store.commit('updateActiveViewName', '履歴');
  }
};
</script>
<style scoped lang="scss">
.history {
  &__container {
    width: 100vw;
    min-height: 100vh;
    padding: 110px 10px 80px;
    background-color: $base-color;
  }
  &__router-link-tags {
    display: flex;
    justify-content: center;
    padding: 54px 0px 10px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: $base-color;
    border-bottom: 1px solid $gray-3;
  }
  &__router-view {
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
