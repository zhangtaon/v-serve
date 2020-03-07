import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from '../../../../example'

Vue.config.productionTip = false;

var appNode = document.createElement("div");
appNode.id = "app";
document.body.append(appNode);

Vue.use(VueRouter);
let router = new VueRouter({routes});

export default new Vue({
  router: router,
  render: h => h(App),
}).$mount(appNode);