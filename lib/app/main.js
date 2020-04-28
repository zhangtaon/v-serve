import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import routes from './routes'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './setAxiosToken'

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