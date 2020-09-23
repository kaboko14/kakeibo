<template>
  <div class="login__container">
    <Card class="login__card">
      <div class="login__card-inner">
        <img
          class="login__image"
          src="../assets/lock-alt.svg"
          alt="ログイン"
        >
        <Button
          class="login__google-login-button"
          :button-color="'color-sub'"
          @click="login"
        >
          <p>
            Googleアカウントでログインする
          </p>
        </Button><br>
        <Button
          class="login__gest-login-button"
          :button-color="'color-main'"
          @click="gestLogin"
        >
          <p>
            ゲストとしてログインする
          </p>
        </Button>
      </div>
    </Card>
  </div>
</template>
<script>
import Button from '@/components/atoms/Button.vue';
import Card from '@/components/atoms/Card.vue';
import { mapActions } from 'vuex';
export default {
  name: 'Login',
  components: {
    Button,
    Card
  },
  methods: {
    ...mapActions('auth', ['login', 'gestLogin'])
  }
};

</script>
<style lang="scss" scoped>
.login {
  &__container {
    padding: 50px 10px 70px;
    max-width: $view-max-width;
    min-height: 100vh;
    margin: 0 auto;
  }
  &__card {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    &-inner {
      height: 100%
    }
  }
  &__image {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto 20px;
  }
  &__google-login-button {
    margin-bottom: 10px;
  }
}
</style>
