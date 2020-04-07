import Vue from "vue";
import Vuex from "vuex";

let store = {};

if(process.env.STORE == "true"){
  store =  require ("@app/store");
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
