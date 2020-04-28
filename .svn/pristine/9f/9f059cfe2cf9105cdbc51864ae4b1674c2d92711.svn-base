// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import vl from './libs/vl'
import Bus from './libs/bus'
import iView from 'iview';
import sha256 from './libs/sha256'
import 'iview/dist/styles/iview.css'    // 使用 CSS
import VueResource from 'vue-resource'
import Blob from './excel/Blob'
import Export2Excel from './excel/Export2Excel'
/* eslint-disable no-new */
window.Bus = Bus;

Vue.config.productionTip = false;
Vue.use(vl);
Vue.use(iView);
Vue.use(sha256);
Vue.use(VueResource);
let tokenVal = sessionStorage.getItem('x-access-token');
Vue.http.headers.common['x-access-token'] = tokenVal;
Vue.prototype.$bus = new Vue();
Vue.directive('valid', {
  bind: function (el, binding) {
    // console.log(el)
  },
  inserted: function (el, binding) {
    // console.log(el)
  },
  update: function (el, binding, vnode, oldVnode) {
    // console.log(el);
    // console.log(binding.value);
    let key = binding.value.key;
    let res = binding.value.res;
    if (key !== undefined && res !== undefined && res !== null) {
      let item = res[key];
      if (item !== undefined) {
        if (item.v) {
          el.innerHTML = item.msg;
          el.style.marginBottom = '20px';
        } else {
          el.innerHTML = item.msg;
          el.style.color = 'red';
        }
      }
    }
    //值更新时的工作
    //也会以初始值为参数调用一次
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
