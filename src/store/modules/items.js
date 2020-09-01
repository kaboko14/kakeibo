import { sortItems, getObjectId } from '@/utils'

const initialState = {
  list: {}
}
const getters = {
  items (state) {
    const list = Object.values(state.list)
    sortItems(list)
    return list
  },
  expenseItems (state) {
    const list = Object.values(state.list)
    sortItems(list)
    return list.filter((item) => item.type === 'expense')
  },
  incomeItems (state) {
    const list = Object.values(state.list)
    sortItems(list)
    return list.filter((item) => item.type === 'income')
  }
}
const mutations = {
  add (state, item) {
    const newItem = { ...item }
    newItem.id = getObjectId(state.list)
    // 出費の場合は金額をマイナスにして登録
    if (newItem.type === 'expense') {
      newItem.price = newItem.price * -1
    }
    state.list = {
      ...state.list,
      [newItem.id]: newItem
    }
  },
  remove (state, id) {
    const list = { ...state.list }
    delete list[id]
    state.list = list
  }
}
export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations
}
