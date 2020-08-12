<template>
  <div class="home__container">
    <div class="home__navi">
      <router-link to="/history/">
        全て
      </router-link>|
      <router-link to="/history/expense">
        出金
      </router-link>|
      <router-link to="/history/income">
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
  name: 'History'
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
    width: 80%;
    margin: 0 auto;
    padding: 5px;
  }
}
</style>
