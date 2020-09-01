import Vue from 'vue';
import Vuex from 'vuex';
import items from './modules/items';
import expenses from './modules/expenses';
import incomes from './modules/incomes';
import balance from './modules/balance';
import auth from './modules/auth';
import createPersistedState from 'vuex-persistedstate';

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
    changeActiveViewName (state, viewName) {
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
