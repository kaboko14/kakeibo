<template>
  <div class="login__container">
    <Card class="login__card">
      <div class="login__card-inner">
        <div class="login__rogo-wrapper">
          <img
            class="login__rogo"
            src="../assets/zaKKuri_rogo.svg"
            alt="zaKKuriロゴ"
          >
          <p class="login__text">
            お財布の入出金を<br>
            <span class="login__text--strong">ざっくり</span>
            記録！
          </p>
        </div>
        <div class="login__button-wrapper">
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
            @click="openConfirmModal"
          >
            <p>
              ゲストとしてログインする
            </p>
          </Button>
          <ConfirmModal
            v-show="confirmModalView"
            :confirm-modal-title="'ゲストとしてログイン'"
            @close-button-click="closeConfirmModal"
            @confirm-button-click="confirmGestLogin"
          >
            <p>
              機能確認用に用意されたゲストアカウントでログインします。<br>
              ログイン中に登録した内容を個人のアカウントに引き継ぐことはできません。<br>
              ゲストとしてログインしますか？
            </p>
          </ConfirmModal>
        </div>
      </div>
    </Card>
  </div>
</template>
<script>
import Button from '@/components/atoms/Button.vue';
import Card from '@/components/atoms/Card.vue';
import ConfirmModal from '@/components/molecules/ConfirmModal.vue';
import { mapActions } from 'vuex';
export default {
  name: 'Login',
  components: {
    Button,
    Card,
    ConfirmModal
  },
  data() {
    return {
      confirmModalView: false
    };
  },
  methods: {
    ...mapActions('auth', ['login', 'gestLogin']),
    openConfirmModal() {
      this.confirmModalView = true;
    },
    closeConfirmModal() {
      this.confirmModalView = false;
    },
    confirmGestLogin(answer) {
      if (answer) {
        this.gestLogin();
        this.closeConfirmModal();
      } else {
        this.closeConfirmModal();
      }
    }
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
    &-inner {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
  &__rogo-wrapper {
    padding: 0px 10px 20px;
  }
  &__rogo {
    display: block;
    width: 200px;
    height: 150px;
    margin: 0 auto 10px;
  }
  &__text {
    font-size: 18px;
    text-align: center;
    line-height: 1.6;
    &--strong {
      color: $main-color;
      font-size: 24px;
      font-weight: bold;
    }
  }
  &__button-wrapper {
    height: 100%;
  }
  &__google-login-button {
    margin-bottom: 16px;
  }
}
</style>
