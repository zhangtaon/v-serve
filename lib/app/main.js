import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from '@app/router'
import store from './store'
import ElementUI from 'element-ui'

//elementUI 所有包含size属性的组件默认设置
Vue.use(ElementUI, { size: 'medium', zIndex: 3000 });


Vue.config.productionTip = false;

var appNode = document.createElement("div");
appNode.id = "app";
document.body.append(appNode);

Vue.use(VueRouter);
let router = new VueRouter({routes});

export default new Vue({
  router,
  store,
  render: h => h(App),
}).$mount(appNode);