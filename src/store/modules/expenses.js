import { sortByDate, getItemId } from '@/utils'

const initialState = {
  list: [
    { id: 0, name: 'コンビニ', price: 150 },
    { id: 1, name: 'スーパー', price: 2000 },
    { id: 2, name: '外食', price: 1000 },
    { id: 3, name: '自販機', price: 130 },
    { id: 4, name: '消耗品', price: 200 }
  ]
}

const getters = {
  itemId (state) {
    return getItemId(state.items)
  }
}
const mutations = {
  addItem (state, item) {
    const newItem = Object.assign({}, item)
    newItem.id = getItemId(state.items)
    state.items.push(newItem)
    sortByDate(state.items)
  },
  deleteItem (state, { id }) {
    state.items = state.items.filter((item) => id !== item.id)
  }
}

export default {
  state: initialState,
  namespaced: true,
  getters,
  mutations
}
