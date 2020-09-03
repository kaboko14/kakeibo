import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { sortItems, getObjectId } from '@/utils';

const initialState = {
  list: {}
};
const getters = {
  uid(state, getters, rootState) {
    console.log(rootState.auth.loginUser.uid);
    return rootState.auth.loginUser.uid;
  },
  items (state) {
    const list = Object.values(state.list);
    sortItems(list);
    return list;
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
  set (state, item) {
    const newItem = { ...item };
    state.list = {
      ...state.list,
      [newItem.id]: newItem
    };
  },
  remove (state, item) {
    const list = { ...state.list };
    delete list[item.id];
    state.list = list;
  }
};
const actions = {
  add({ state, getters, commit }, item) {
    const newItem = { ...item };
    newItem.id = getObjectId(state.list);
    // 出費の場合は金額をマイナスにして登録
    if (newItem.type === 'expense' && newItem.price > 0) {
      newItem.price = newItem.price * -1;
    }
    if (getters.uid) {
      firebase.firestore().collection(`users/${getters.uid}/items`)
        .doc(`${newItem.id}`).set(newItem)
        .then(() => { commit('set', newItem); })
        .catch(error => { console.log(error); });
    }
  },
  fetch({ getters, commit }) {
    firebase.firestore().collection(`users/${getters.uid}/items`)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => commit('set', doc.data()));
      });
  }
};
export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions
};
