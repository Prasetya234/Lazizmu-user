import Vue from "vue";
import VueResource from "vue-resource";
import config from "@/config";

Vue.use && Vue.use(VueResource);

const state = {
  infaq: [],
};

const mutations = {
  GET_INFAQ(state, value) {
    state.infaq = value;
  },
};

const actions = {
  getInfaq: ({ commit }, { success, fail }) => {
    Vue.http.get(config.api.infaq).then(
      (response) => {
        success && success(response);
        commit("GET_INFAQ", response);
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
