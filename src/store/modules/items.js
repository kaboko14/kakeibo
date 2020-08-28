import { sortByDate, getItemId } from '@/utils'

const initialState = {
  list: []
}

const getters = {
  itemId (state) {
    return getItemId(state.items)
  }
}
const mutations = {
  add (state, item) {
    const newItem = Object.assign({}, item)
    newItem.id = getItemId(state.items)
    state.items.push(newItem)
    sortByDate(state.items)
  },
  delete (state, { id }) {
    state.items = state.items.filter((item) => id !== item.id)
  }
}

export default {
  state: initialState,
  namespaced: true,
  getters,
  mutations
}
