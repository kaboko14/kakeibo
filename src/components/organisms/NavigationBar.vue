<template>
  <Bar>
    <div class="navigation-bar__container">
      <router-link
        to="/home"
        class="navigation-bar__link"
        active-class="navigation-bar__link--active"
      >
        <NavigationIcon
          :icon-label="homeLabel"
        >
          <HomeIcon />
        </NavigationIcon>
      </router-link>
      <router-link
        to="/history"
        class="navigation-bar__link"
        active-class="navigation-bar__link--active"
      >
        <NavigationIcon
          :icon-label="historyLabel"
        >
          <HistoryIcon />
        </NavigationIcon>
      </router-link>
      <router-link
        to="/library"
        class="navigation-bar__link"
        active-class="navigation-bar__link--active"
      >
        <NavigationIcon
          :icon-label="libraryLabel"
        >
          <BookIcon />
        </NavigationIcon>
      </router-link>
    </div>
  </Bar>
</template>
<script>
import Bar from '@/components/atoms/Bar.vue';
import HomeIcon from '@/components/icons/HomeIcon.vue';
import HistoryIcon from '@/components/icons/HistoryIcon.vue';
import BookIcon from '@/components/icons/BookIcon.vue';
import NavigationIcon from '@/components/molecules/NavigationIcon.vue';
export default {
  name: 'NavigationBar',
  components: {
    Bar,
    HomeIcon,
    BookIcon,
    HistoryIcon,
    NavigationIcon
  },
  data () {
    return {
      homeLabel: 'ホーム・入力',
      historyLabel: '履歴',
      libraryLabel: '品目登録'
    };
  }
};
</script>
<style lang="scss" scoped>
  .navigation-bar {
    &__container {
      display: flex;
      margin: 0 auto;
      padding: 10px 0px;
      width: 100%;
      max-width: 1100px;
      justify-content: space-around;
    }
    &__link {
      color: $nav-color-inactive;
      stroke: $nav-color-inactive;
      &--active {
        color: $nav-color-active;
        stroke: $nav-color-active;
      }
    }
  }

</style>
