<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <button @click="doLogin">
      signin
    </button>
    <button @click="doLogout">
      signout
    </button>
    <br>
    ({{ user }})
  </div>
</template>
<script>
import Firebase from './../firebase';

export default {
  name: 'Login',
  computed: {
    user () {
      return this.$store.getters.user;
    }
  },
  created () {
    Firebase.onAuth();
  },
  methods: {
    doLogin () {
      Firebase.login();
    },
    doLogout () {
      Firebase.logout();
    }
  }
};
</script>
<style lang="scss" scoped>
  .a {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-size: cover;
  }

</style>
