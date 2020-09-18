import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const initialState = {
  balance: 0
};
const getters = {
  uid(state, getters, rootState) {
    return rootState.auth.loginUser.uid;
  },
  balance(state) {
    return state.balance;
  }
};
const mutations = {
  update(state, price) {
    state.balance = price;
  },
  deleteBalance(state) {
    state.balance = 0;
  }
};
const actions = {
  async deposit({ state, getters, commit }, price) {
    try {
      const newBalance = state.balance + price;
      if (getters.uid) {
        await firebase.firestore().collection('users').doc(getters.uid).update({
          balance: newBalance
        });
        commit('update', newBalance);
      }
    } catch (error) {
      console.error(error);
    }
  },
  deleteBalance({ commit }) {
    commit('deleteBalance');
  }
};
export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions
};
