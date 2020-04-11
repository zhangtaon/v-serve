import Vue from "vue";
import Vuex from "vuex";
import { log } from "@v-util"

let store = {};
try {
  store = require("@app/store");
} catch (e) {
  log("v-serve: store加载无效");
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ...store
  }
});
