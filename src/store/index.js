import Vue from 'vue';
import Vuex from 'vuex';
import counter from './counter';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counter,
  },
  state: {
    title: 'Hello VueX',
  },
  getters: {
    changeTitle(state) {
      return `${state.title}!!!`;
    },
  },
});
