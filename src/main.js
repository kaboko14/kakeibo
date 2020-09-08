import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

Vue.config.productionTip = false;

console.log(process.env.VUE_APP_API_KEY);
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
// 認証状態の永続性 タブを閉じるまで保持
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
