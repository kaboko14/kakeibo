const state = {
  user: null
}
const getters = {
  user (state) {
    return state.user
  }
}
const mutations = {
  onAuthStateChange (state, user) {
    state.user = user
  }
}
export default {
  state,
  getters,
  mutations
}
