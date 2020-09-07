<template>
  <div id="app">
    <MobileHeader
      v-show="loginUser"
      class="app__mobile-header"
    />
    <NavigationBar
      v-show="loginUser"
      class="app__navigation-bar"
    />
    <router-view />

    <!-- 仮のログアウトボタン -->
    <button
      v-show="loginUser"
      class="logout-button"
      @click="logout"
    >
      logout
    </button>
  </div>
</template>
<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import MobileHeader from '@/components/organisms/MobileHeader.vue';
import NavigationBar from '@/components/organisms/NavigationBar.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    MobileHeader,
    NavigationBar
  },
  computed: {
    loginUser() {
      return this.$store.state.auth.loginUser;
    }
  },
  created() {
    // 全ページでログインユーザー情報を取得できるようにAppでユーザー取得処理を行う
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        // 現在ログインしているユーザーがいるときの処理
        this.setLoginUser(user);
        this.fetchUser()
          .then(result => {
            if (!result) {
              this.userTimestamp();
              this.addInitialExpenses();
            }
          }).then(() => {
            this.fetchItems();
            this.fetchExpenses();
            this.fetchIncomes();
            if (this.$router.currentRoute.name === 'Login') {
              this.$router.push('/home');
            }
          });
      } else {
      // ログアウト時の処理
        this.deleteLoginUser();
        if (this.$router.currentRoute.name !== 'Login') {
          this.$router.push('/login');
        }
      }
    });
  },
  methods: {
    ...mapActions('auth', ['setLoginUser', 'userTimestamp', 'logout', 'deleteLoginUser', 'fetchUser']),
    ...mapActions('items', ['fetchItems']),
    ...mapActions('expenses', ['addInitialExpenses', 'fetchExpenses']),
    ...mapActions('incomes', ['fetchIncomes'])
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
// 仮のログアウトボタン
.logout-button {
  top: 8px;
right: 40px;
  z-index: 40;
  position: fixed;
    }
</style>
