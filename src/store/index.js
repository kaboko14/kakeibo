import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import auth from './modules/auth';
import balance from './modules/balance';
import expenses from './modules/expenses';
import incomes from './modules/incomes';
import items from './modules/items';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    activeViewName: ''
  },
  getters: {
    balance (state) {
      return state.balance;
    },
    activeViewName (state) {
      return state.activeViewName;
    }
  },
  mutations: {
    updateActiveViewName (state, viewName) {
      state.activeViewName = viewName;
    }
  },
  plugins: [createPersistedState({ key: 'myKakeibo' })],
  modules: {
    auth,
    items,
    expenses,
    incomes,
    balance
  }
});
