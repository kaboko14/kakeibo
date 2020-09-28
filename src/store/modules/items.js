import { sortItems, descSortByCreatedAt } from '@/utils';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const initialState = {
  list: {}
};
const getters = {
  uid(state, getters, rootState) {
    return rootState.auth.loginUser.uid;
  },
  items (state) {
    const list = Object.values(state.list);
    sortItems(list);
    return list;
  },
  recentlyItems(state) {
    const list = Object.values(state.list);
    descSortByCreatedAt(list);
    return list.slice(0, 5);
  },
  expenseItems (state) {
    const list = Object.values(state.list);
    sortItems(list);
    return list.filter((item) => item.price < 0);
  },
  incomeItems (state) {
    const list = Object.values(state.list);
    sortItems(list);
    return list.filter((item) => item.price > 0);
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
  remove (state, item) {
    const list = { ...state.list };
    delete list[item.id];
    state.list = list;
  },
  deleteItems(state) {
    state.list = {};
  }
};
const actions = {
  async add({ getters, commit }, item) {
    try {
      const newItem = {
        ...item,
        createdAt: new Date()
      };
      // 出費の場合は金額をマイナスにして登録
      if (newItem.type === 'expense' && newItem.price > 0) {
        newItem.price = newItem.price * -1;
      }
      if (getters.uid) {
        const doc = await firebase.firestore().collection(`users/${getters.uid}/items`).add(newItem);
        commit('add', { id: doc.id, item: newItem });
      }
    } catch (error) {
      console.error('アイテム追加失敗', error);
    }
  },
  async remove({ getters, commit }, item) {
    try {
      if (getters.uid) {
        await firebase.firestore().collection(`users/${getters.uid}/items`).doc(item.id).delete();
        commit('remove', item);
      }
    } catch (error) {
      console.error('出金品目削除失敗', error);
    }
  },
  async fetchItems({ getters, commit }) {
    try {
      const snapshot = await firebase.firestore().collection(`users/${getters.uid}/items`).get();
      snapshot.forEach(doc => commit('add', { id: doc.id, item: doc.data() }));
    } catch (error) {
      console.error('アイテム取得失敗', error);
    }
  },
  deleteItems({ commit }) {
    commit('deleteItems');
  }
};
export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions
};
