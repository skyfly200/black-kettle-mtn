import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entry: {},
    count: 0,
    sent: false,
    submitted: false,
    goal: 10000,
  },
  mutations: {
    setCount (state, n) {
      state.count = n
    },
    submitted (state, entry) {
      state.entry = entry;
      state.count = entry.count;
      state.submitted = true;
    },
    sent(state, bool) {
      state.sent = bool;
    },
  },
  actions: {}
})
