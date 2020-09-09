<template>
  <div class="library__container">
    <Card
      :card-title="'登録品目一覧'"
      class="library__category-items"
    >
      <RouterLinkTags
        :router-links="routerLinks"
        class="library__router-link-tags"
      />
      <router-view
        class="library__router-view"
      />
    </Card>
    <Card
      :card-title="'新規登録'"
      class="library__add-category"
    >
      <router-view
        name="addCategoryForm"
        class="library__router-view"
      />
    </Card>
  </div>
</template>

<script>
import Card from '@/components/atoms/Card.vue';
import RouterLinkTags from '@/components/molecules/RouterLinkTags.vue';
export default {
  name: 'Home',
  components: {
    Card,
    RouterLinkTags
  },
  data () {
    return {
      activeView: '',
      routerLinks: [
        {
          tagLabel: '出金',
          linkTo: '/library'
        },
        {
          tagLabel: '入金',
          linkTo: '/library/income'
        }
      ]
    };
  },
  created () {
    this.$store.commit('updateActiveViewName', '品目登録');
  }
};
</script>
<style scoped lang="scss">
.library {
  &__container {
    padding: 54px 10px 70px;
    max-width: 1100px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: transparent;
  }
  &__category-items  {
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
  &__add-category-forms {
    margin-bottom: 10px;
  }
  &__add-item-button {
    margin: 0 auto;
  }
  &__modal__button-container {
    width:100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40%,1fr));
    gap: 10px;
    justify-items: center;
    align-items: center;

  }
}
</style>
