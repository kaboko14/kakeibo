import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2dbskhPSf-skGW1unjSCARDzfjHNFP7I",
  authDomain: "kakeibo-3ef76.firebaseapp.com",
  databaseURL: "https://kakeibo-3ef76.firebaseio.com",
  projectId: "kakeibo-3ef76",
  storageBucket: "kakeibo-3ef76.appspot.com",
  messagingSenderId: "977920121954",
  appId: "1:977920121954:web:6802fa88a5f6fe40d2853b",
  measurementId: "G-VJXXGZR2HV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
