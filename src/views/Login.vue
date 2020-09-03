<template>
  <div>
    <button
      @click="login"
    >
      login
    </button>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'Login',
  methods: {
    ...mapActions('auth', ['login'])
  }
};

</script>
<style lang="scss" scoped>
</style>
