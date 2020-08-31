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
      <AddCategoryForms
        class="library__add-category-forms"
        :new-category-item="newCategoryItem"
        :button-properties="addCategoryModalButtons"
        @inputAddCategoryForm="onChange"
        @clickEnterButton="onChangeCateboryItems"
      />
      <Button
        :button-class="'button-sub-color'"
        class="library__add-item-button"
      >
        <p>
          新規登録
        </p>
      </Button>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/atoms/Card.vue'
import Button from '@/components/atoms/Button.vue'
import RouterLinkTags from '@/components/molecules/RouterLinkTags.vue'
import AddCategoryForms from '@/components/organisms/AddCategoryForms.vue'
export default {
  name: 'Home',
  components: {
    Card,
    Button,
    RouterLinkTags,
    AddCategoryForms
  },
  data () {
    return {
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
    }
  },
  created () {
    this.$store.commit('changeActiveViewName', '品目登録')
  }
}
</script>
<style scoped lang="scss">
.library {
  &__container {
    padding: 60px 20px 80px;
    max-width: 1100px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: transparent;
  }
  &__category-items  {
    margin-bottom: 20px;
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
}
</style>
