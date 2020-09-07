import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// 初回ログイン時に登録する入金品目
const initialList = [
  { name: 'ATM', price: 0 },
  { name: '給料', price: 2000 }
];
const initialState = {
  list: {}
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
  add (state, { id, item }) {
    const newItem = {
      ...item,
      id: id
    };
    state.list = {
      ...state.list,
      [id]: newItem
    };
  },
  update(state, item) {
    state.list = {
      ...state.list,
      [item.id]: item
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
        const doc = await firebase.firestore().collection(`users/${getters.uid}/incomes`).add(newItem);
        commit('add', { id: doc.id, item: newItem });
      }
    } catch (error) {
      console.error('入金品目追加失敗', error);
    }
  },
  async remove({ getters, commit }, item) {
    try {
      if (getters.uid) {
        await firebase.firestore().collection(`users/${getters.uid}/incomes`).doc(item.id).delete();
        commit('remove', item);
      }
    } catch (error) {
      console.error('入金品目削除失敗', error);
    }
  },
  async update({ getters, commit }, item) {
    try {
      if (getters.uid) {
        await firebase.firestore().collection(`users/${getters.uid}/incomes`).doc(item.id).update(item);
        commit('update', item);
      }
    } catch (error) {
      console.error(error);
    }
  },
  async fetchIncomes({ getters, commit }) {
    try {
      const snapshot = await firebase.firestore().collection(`users/${getters.uid}/incomes`).get();
      snapshot.forEach(doc => commit('add', { id: doc.id, item: doc.data() }));
    } catch (error) {
      console.error('入金品目取得失敗', error);
    }
  },
  addInitialIncomes({ dispatch }) {
    initialList.forEach(item => dispatch('add', item));
  }
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions
};
