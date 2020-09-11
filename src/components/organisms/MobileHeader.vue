<template>
  <Bar class="mobile-header__bar">
    <h2 class="mobile-header__title">
      {{ activeViewName }}
    </h2>
    <UserIcon
      tabindex="0"
      :user-photo-url="photoURL"
      :image-width="'30px'"
      :image-height="'30px'"
      class="mobile-header__user-icon"
      @user-icon-click="openDropDown"
    />
    <DropDown
      v-show="dropDownView"
      class="mobile-header__drop-down"
      @drop-down-background-click="closeDropDown"
    >
      <p
        class="mobile-header__logout"
        @click="logoutApp"
      >
        ログアウト
      </p>
    </DropDown>
  </Bar>
</template>
<script>
import Bar from '@/components/atoms/Bar.vue';
import UserIcon from '@/components/atoms/UserIcon.vue';
import DropDown from '@/components/molecules/DropDown.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'MobileHeader',
  components: {
    Bar,
    UserIcon,
    DropDown
  },
  data() {
    return {
      dropDownView: false
    };
  },
  computed: {
    ...mapGetters('auth', ['photoURL']),
    activeViewName () {
      return this.$store.getters.activeViewName;
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
    openDropDown() {
      this.dropDownView = true;
    },
    closeDropDown() {
      this.dropDownView = false;
    },
    logoutApp () {
      this.logout();
      this.dropDownView = false;
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
    color: $font-color-wh;
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
  &__drop-down {
    position: absolute;
    top: 34px;
    right: 5px;
  }
  &__logout {
    display: inline-block;
    text-decoration: underline;
    &:hover {
      color: $gray-3;
    }
  }
}
</style>
