import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    items: [],
    expenseCategoryItems: [
      { id: 0, name: 'コンビニ', price: 150 },
      { id: 1, name: 'スーパー', price: 2000 },
      { id: 2, name: '外食', price: 1000 },
      { id: 3, name: '自販機', price: 130 },
      { id: 4, name: '消耗品', price: 200 }
    ],
    incomeCategoryItems: [
      { id: 0, name: 'ATM', price: 0 },
      { id: 1, name: '給料', price: 2000 }
    ]
  },
  getters: {
    expenseCategoryButtonProperties (state) {
      return state.expenseCategoryItems.map((item) => {
        return {
          id: item.id,
          name: item.name,
          price: item.price
            ? item.price
            : null,
          labelName: item.name,
          labelPrice: item.price
            ? `￥${item.price.toLocaleString()}`
            : null,
          className: 'button-category'
        }
      })
    },
    incomeCategoryButtonProperties (state) {
      return state.incomeCategoryItems.map((item) => {
        return {
          id: item.id,
          name: item.name,
          price: item.price ? item.price : null,
          labelName: item.name,
          labelPrice: item.price ? `￥${item.price.toLocaleString()}` : null,
          className: 'button-category'
        }
      })
    }
  },
  mutations: {
    updateItems (state, items) {
      state.items = items
    },
    deleteItem (state, id) {
      state.items = state.items.filter(item => item.id !== id)
    },
    updateExpenseCategoryItems (state, categoryItems) {
      state.expenseCategoryItems = categoryItems
    },
    updateIncomeCategoryItems (state, categoryItems) {
      state.incomeCategoryItems = categoryItems
    }
  },
  plugins: [createPersistedState({ key: 'myKakeibo' })]
})
