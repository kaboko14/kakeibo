import Vue from 'vue'
import Vuex from 'vuex'
import items from './modules/items'
import expenses from './modules/expenses'
import incomes from './modules/incomes'
import auth from './modules/auth'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    balance: 3000,
    activeViewName: ''
  },
  getters: {
    balance (state) {
      return state.balance
    },
    activeViewName (state) {
      return state.activeViewName
    }
  },
  mutations: {
    // updateItems (state, items) {
    //   state.items = items
    // },
    // deleteItem (state, id) {
    //   state.items = state.items.filter((item) => item.id !== id)
    // },
    updateExpenseCategoryItems (state, categoryItems) {
      state.expenseCategoryItems = categoryItems
    },
    updateIncomeCategoryItems (state, categoryItems) {
      state.incomeCategoryItems = categoryItems
    },
    changeActiveViewName (state, viewName) {
      state.activeViewName = viewName
    }
  },
  plugins: [createPersistedState({ key: 'myKakeibo' })],
  modules: {
    auth,
    items,
    expenses,
    incomes
  }
})
