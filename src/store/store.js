import Vue from "vue";
import Vuex from "vuex";

import story from "./story";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    story: story
  },
  state: {
    appLoading: true,
    spatialUnit: "districts",
    mapFocusPadding: {
      top: 100,
      right: 100,
      bottom: 100,
      left: 100
    }
  },
  getters: {
    mapFocusPadding: state => {
      return state.mapFocusPadding;
    },
    appLoading: state => {
      return state.appLoading;
    }
  },
  mutations: {
    /**
     * Initialize the state with essential map data from local storage.
     * https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store
     * TODO: Implement vuex-persistedstate if need more options
     * @param {*} state
     */
    initializeState(state) {
      if (localStorage.getItem("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    },
    setAppLoading(state, loading) {
      state.appLoading = loading;
    }
  },
  actions: {
    finishLoadingApp(context) {
      context.commit("setAppLoading", false);
    }
  }
});
