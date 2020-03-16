export default {
  state: {
    count: 0,
  },
  mutations: {
    changeCounter(state, payload) {
      state.count += payload;
    },
  },
  actions: {
    asyncCountHandler({ commit }, payload) {
      setTimeout(() => {
        commit('changeCounter', payload.value);
      }, payload.delay);
    },
  },
  getters: {
    counterHandler(state) {
      return state.count;
    },
  },
};
