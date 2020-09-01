const initialState = {
  balance: 0
};
const getters = {
  balance(state) {
    return state.balance;
  }
};
const mutations = {
  calculate(state, price) {
    state.balance = state.balance + price;
  }
};
export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations
};
