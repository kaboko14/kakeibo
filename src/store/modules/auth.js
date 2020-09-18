import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// ゲストユーザー情報
const gestUser = {
  email: 'kakeibo@gest.com',
  password: 'kakeibo-gest'
};

const initialState = {
  loginUser: null
};
const getters = {
  userName(state) {
    return state.loginUser
      ? state.loginUser.displayName
      : '';
  },
  photoURL(state) {
    return state.loginUser
      ? state.loginUser.photoURL
      : '';
  },
  uid(state) {
    return state.loginUser
      ? state.loginUser.uid
      : null;
  }
};
const mutations = {
  setLoginUser(state, user) {
    state.loginUser = user;
  },
  deleteLoginUser(state) {
    state.loginUser = null;
  },
  onAuthStateChange (state, user) {
    state.user = user;
  }
};
const actions = {
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  },
  gestLogin() {
    if (confirm('ゲストとしてログインしますか？')) {
      firebase.auth().signInWithEmailAndPassword(gestUser.email, gestUser.password);
    }
  },
  logout() {
    firebase.auth().signOut();
  },
  setLoginUser({ commit }, user) {
    commit('setLoginUser', user);
  },
  deleteLoginUser({ commit }) {
    commit('deleteLoginUser');
  },
  async fetchUser({ getters }) {
    const fetchedUser = await firebase.firestore().collection('users').doc(getters.uid).get();
    return fetchedUser.data();
  },
  async createUser({ getters }) {
    firebase.firestore().collection('users').doc(getters.uid).set({
      balance: 0,
      createdAt: new Date()
    });
  }
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions
};
