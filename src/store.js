import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    items: [],
    categoryItems: [
      { id: 0, name: 'コンビニ', price: 150 },
      { id: 1, name: 'スーパー', price: 2000 },
      { id: 2, name: '外食', price: 1000 },
      { id: 3, name: '自販機', price: 130 },
      { id: 4, name: '消耗品', price: 200 }
    ]
  },
  getters: {
    categoryButtonProperties (state) {
      return state.categoryItems.map((item) => {
        return {
          id: item.id,
          name: item.name,
          price: item.price,
          labelName: item.name,
          labelPrice: `￥${item.price.toLocaleString()}`,
          className: 'button-category'
        }
      })
    }
  },
  mutations: {
    updateItems (state, items) {
      state.items = items
    },
    updateCategoryItems (state, categoryItems) {
      state.categoryItems = categoryItems
    }
  },
  plugins: [createPersistedState({ key: 'myKakeibo' })]
})
