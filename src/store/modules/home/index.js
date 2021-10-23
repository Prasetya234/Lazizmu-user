import Vue from "vue";
import VueResource from "vue-resource";
import config from "@/config";

Vue.use && Vue.use(VueResource);

const state = {
  isiBerita: [],
};

const mutations = {
  GET_BERITA(state, value) {
    state.isiBerita = value;
  },
};

const actions = {
  getIsiBerita: ({ commit }, { success, fail }) => {
    Vue.http.get(config.api.berita).then(
      (response) => {
        success && success(response);
        commit("GET_BERITA", response);
      },
      (response) => {
        fail && fail(response);
      }
    );
  },
};

const getters = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
