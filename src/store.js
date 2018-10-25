import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entry: {},
    count: 0,
    submited: false,
  },
  mutations: {
    setCount (state, n) {
      state.count = n
    },
    submitted (state, entry) {
      state.entry = entry;
      state.count = entry.count;
      state.submited = true;
    },
  },
  actions: {

  }
})