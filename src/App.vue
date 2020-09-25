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
    <transition name="app__fade">
      <router-view class="app__view" />
    </transition>
  </div>
</template>
<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import MobileHeader from '@/components/organisms/MobileHeader.vue';
import NavigationBar from '@/components/organisms/NavigationBar.vue';
import { mapMutations, mapActions } from 'vuex';

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
          .then(fetchedUser => {
            if (!fetchedUser) {
              this.createUser();
              this.addInitialCategories();
            } else {
              this.update(fetchedUser.balance);
            }
          }).then(() => {
            this.fetchItemsAndCategories();
            if (this.$router.currentRoute.name === 'Login') {
              this.$router.push('/home');
            }
          });
      } else {
      // ログアウト時の処理
        this.storeInit();
        if (this.$router.currentRoute.name !== 'Login') {
          this.$router.push('/login');
        }
      }
    });
  },
  methods: {
    ...mapMutations('balance', ['update', 'deleteBalance']),
    ...mapActions('auth', ['setLoginUser', 'createUser', 'deleteLoginUser', 'fetchUser']),
    ...mapActions('items', ['fetchItems', 'deleteItems']),
    ...mapActions('expenses', ['addInitialExpenses', 'fetchExpenses', 'deleteExpenses']),
    ...mapActions('incomes', ['addInitialIncomes', 'fetchIncomes', 'deleteIncomes']),
    fetchItemsAndCategories() {
      this.fetchItems();
      this.fetchExpenses();
      this.fetchIncomes();
    },
    addInitialCategories() {
      this.addInitialExpenses();
      this.addInitialIncomes();
    },
    storeInit() {
      this.deleteLoginUser();
      this.deleteBalance();
      this.deleteItems();
      this.deleteExpenses();
      this.deleteIncomes();
    }
  }
};
</script>

<style lang="scss">
@import './styles/HTML5_Doctor_CSS Reset.css';
// html {
//   overflow-y:scroll;
// }
* {
  box-sizing: border-box;
  font-family: "Yu-Gothic",sans-serif;
  color: $font-color-bk;
}
a {
  text-decoration: none;
}
#app {
  position: relative;
  min-height: 100vh;
  background-color: $bg-color;
}
.app__fade-leave {
  opacity: 0;
}
.app__fade-enter-active {
  animation: fade-in 0.3s ease-out;
}
.app {
  &__mobile-header {
    position: fixed;
    top: 0;
    z-index: 3;
  }
  &__navigation-bar {
    position: fixed;
    bottom: 0;
    z-index: 2;
  }
  &__view {
    z-index: -1;
  }
}
</style>
