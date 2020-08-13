<template>
  <div class="home__container">
    <div class="home__navi">
      <router-link to="/library">
        出金
      </router-link>|
      <router-link to="/library/income">
        入金
      </router-link>
    </div>
    <router-view
      class="home__add-item"
    />
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
<style scoped lang="scss">
.home {
  &__container {
    max-width: 1100px;
    margin: 0 auto;
  }
  &__navi {
    text-align: center;
    padding: 10px;
  }
  &__add-item {
    width: 320px;
    margin: 0 auto;
    padding: 5px;
  }
}
</style>
