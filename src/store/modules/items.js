import { sortItems, getItemId } from '@/utils'

const initialState = {
  list: []
}
const getters = {
  itemId (state) {
    return getItemId(state.list)
  }
}
const mutations = {
  add (state, item) {
    const newItem = { ...item }
    newItem.id = getItemId(state.list)
    // 出費の場合は金額をマイナスにして登録
    if (newItem.type === 'expense') {
      newItem.price = newItem.price * -1
    }
    state.list.push(newItem)
    sortItems(state.list)
  },
  delete (state, id) {
    state.list = state.list.filter(item => id !== item.id)
  }
}
export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations
}
