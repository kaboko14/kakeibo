import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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
  logout() {
    firebase.auth().signOut();
  },
  setLoginUser({ commit }, user) {
    commit('setLoginUser', user);
  },
  deleteLoginUser({ commit }) {
    commit('deleteLoginUser');
  }

};

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions
};
