import { getObjectId } from '@/utils';

const initialState = {
  list: {
    0: { id: 0, name: 'ATM', price: 0 },
    1: { id: 1, name: '給料', price: 2000 }
  }
};
const getters = {
  buttonProperties (state) {
    const properties = {};
    for (const id in state.list) {
      const item = state.list[id];
      const property = {
        id: item.id,
        name: item.name,
        price: item.price ? item.price : null,
        labelName: item.name,
        labelPrice: item.price ? `￥${item.price.toLocaleString()}` : null
      };
      properties[id] = property;
    }
    return properties;
  }
};
const mutations = {
  add (state, item) {
    const newCategoryItem = { ...item };
    newCategoryItem.id = getObjectId(state.list);
    state.list = {
      ...state.list,
      [newCategoryItem.id]: newCategoryItem
    };
  },
  change (state, item) {
    const newCategoryItem = { ...item };
    state.list = {
      ...state.list,
      [newCategoryItem.id]: newCategoryItem
    };
  },
  remove (state, item) {
    const list = { ...state.list };
    delete list[item.id];
    state.list = list;
  }
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations
};
