<template>
  <div id="app">
    <MobileHeader
      class="app__mobile-header"
    />
    <NavigationBar
      class="app__navigation-bar"
    />
    <router-view />
  </div>
</template>
<script>
import MobileHeader from '@/components/organisms/MobileHeader.vue';
import NavigationBar from '@/components/organisms/NavigationBar.vue';
export default {
  components: {
    MobileHeader,
    NavigationBar
  }
};
</script>

<style lang="scss">
@import './styles/HTML5_Doctor_CSS Reset.css';
* {
  box-sizing: border-box;
  font-family: "Yu-Gothic",sans-serif;
  color: $font-color-bk;
}
a {
  text-decoration: none;
}
#app {
  min-height: 100vh;
  background-color: $bg-color;
}
.app {
  &__mobile-header {
    position: fixed;
    top: 0;
    z-index: 30;
  }
  &__navigation-bar {
    position: fixed;
    bottom: 0;
    z-index: 30;
  }
}
</style>
