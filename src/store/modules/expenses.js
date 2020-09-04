import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const initialState = {
  list: {
    0: { id: 0, name: 'コンビニ', price: 150 },
    1: { id: 1, name: 'スーパー', price: 2000 },
    2: { id: 2, name: '外食', price: 1000 },
    3: { id: 3, name: '自販機', price: 130 },
    4: { id: 4, name: '消耗品', price: 200 }
  }
};
const getters = {
  uid(state, getters, rootState) {
    return rootState.auth.loginUser.uid;
  },
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
  set (state, { id, item }) {
    const newItem = {
      ...item,
      id: id
    };
    state.list = {
      ...state.list,
      [id]: newItem
    };
  },
  remove (state, item) {
    const list = { ...state.list };
    delete list[item.id];
    state.list = list;
  }
};
const actions = {
  async add({ getters, commit }, item) {
    try {
      const newItem = {
        ...item,
        createdAt: new Date()
      };
      if (getters.uid) {
        const doc = await firebase.firestore().collection(`users/${getters.uid}/expenses`).add(newItem);
        commit('set', { id: doc.id, item: newItem });
      }
    } catch (error) {
      console.error('出金品目追加失敗', error);
    }
  },
  async fetchExpenses({ getters, commit }) {
    try {
      console.log('expense fetch');
      const snapshot = await firebase.firestore().collection(`users/${getters.uid}/expenses`).get();
      snapshot.forEach(doc => commit('set', { id: doc.id, item: doc.data() }));
    } catch (error) {
      console.error('出金品目取得失敗', error);
    }
  }
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions
};
