<template>
  <Bar>
    <div class="navigation-bar__container">
      <router-link
        to="/"
        active-class="navigation-bar__link--active"
        exact=""
      >
        <NavigationIcon
          :icon-image="homeIconImage"
          :icon-label="'ホーム・入力'"
        />
      </router-link>
      <router-link
        to="/history"
        active-class="navigation-bar__link--active"
        exact=""
      >
        <NavigationIcon
          :icon-image="historyIconImage"
          :icon-label="'履歴'"
        />
      </router-link>
      <router-link
        to="/library"
        active-class="navigation-bar__link--active"
        exact=""
      >
        <NavigationIcon
          :icon-image="categoryImage"
          :icon-label="'品目登録'"
        />
      </router-link>
    </div>
  </Bar>
</template>
<script>
import Bar from '@/components/atoms/Bar.vue'
import NavigationIcon from '@/components/molecules/NavigationIcon.vue'
export default {
  name: 'NavigationBar',
  components: {
    Bar,
    NavigationIcon
  },
  data () {
    return {
      homeIconImage: 'home-icon.svg',
      historyIconImage: 'history-icon.svg',
      categoryImage: 'category-icon.svg'
    }
  }
}
</script>
<style lang="scss" scoped>
  .navigation-bar {
    &__container {
      display: flex;
      justify-content: space-around;
    }
    &__link {
      &--active {
        color: $base-color;
        fill: $base-color;
      }
    }
  }

</style>
