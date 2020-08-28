import { sortByDate, getItemId } from '@/utils'

const initialState = {
  list: [
    { id: 0, name: 'ATM', price: 0 },
    { id: 1, name: '給料', price: 2000 }
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
