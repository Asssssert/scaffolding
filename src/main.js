// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import $ from 'jquery'
import axios from 'axios'
import Lockr from 'lockr'
import Vuex from 'vuex'
import store from './vuex/store'
import global from './assets/js/global'

const bus = new Vue();
window.bus = bus;
window.axios = axios;
window.$ = $;
window._g = global;
window.router = router;
window.NProgress = NProgress;
window.store = store;
window.Lockr = Lockr;

Vue.config.productionTip = false;


Vue.use(ElementUI);
Vue.use(Vuex);

router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
});

router.afterEach(transition => {
  NProgress.done();
});

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
