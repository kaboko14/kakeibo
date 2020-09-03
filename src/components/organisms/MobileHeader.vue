<template>
  <Bar class="mobile-header__bar">
    <h2 class="mobile-header__title">
      {{ activeViewName }}
    </h2>
    <UserIcon
      :user-photo-url="photoURL"
      :image-width="'30px'"
      :image-height="'30px'"
      class="mobile-header__user-icon"
    />
  </Bar>
</template>
<script>
import Bar from '@/components/atoms/Bar.vue';
import UserIcon from '@/components/atoms/UserIcon.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'MobileHeader',
  components: {
    Bar,
    UserIcon
  },
  computed: {
    ...mapGetters('auth', ['photoURL']),
    activeViewName () {
      return this.$store.getters.activeViewName;
    }
  }
};
</script>
<style scoped lang="scss">
.mobile-header {
  position: relative;
  &__bar {
    height: 40px;
  }
  &__title{
    color: #ffffff;
    font-size: 16px;
    font-weight: normal;
    line-height: 40px;
    text-align: center;
  }
  &__user-icon {
    position: absolute;
    top:5px;
    right: 5px;
  }
}
</style>
