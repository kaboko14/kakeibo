import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import store from './store';

const firebaseConfig = {
  apiKey: 'AIzaSyC2dbskhPSf-skGW1unjSCARDzfjHNFP7I',
  authDomain: 'kakeibo-3ef76.firebaseapp.com',
  databaseURL: 'https://kakeibo-3ef76.firebaseio.com',
  projectId: 'kakeibo-3ef76',
  storageBucket: 'kakeibo-3ef76.appspot.com',
  messagingSenderId: '977920121954',
  appId: '1:977920121954:web:6802fa88a5f6fe40d2853b',
  measurementId: 'G-VJXXGZR2HV'
};

export default {
  init () {
    firebase.initializeApp(firebaseConfig);
    // 認証状態の永続性 タブを閉じるまで保持
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  },
  login () {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
      this.userRegistration(result);
    });
  },
  logout () {
    firebase.auth().signOut();
  },
  onAuth () {
    firebase.auth().onAuthStateChanged(user => {
      // ログアウト時はuserはnull
      const currentUser = user;
      store.commit('onAuthStateChange', currentUser);
    });
  },
  userRegistration (currentUser) {
    firebase.firestore().collection('users').doc(currentUser.user.uid).set({
      uid: currentUser.user.uid,
      displayName: currentUser.user.displayName,
      photoURL: currentUser.user.photoURL
    });
  }
};
