import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import './bus';
import { ValidationProvider, extend, localize } from 'vee-validate';

import { required, email } from 'vee-validate/dist/rules';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import dateFilter from './filters/date';
import currencyFilter from './filters/currency';
import 'swiper/css/swiper.css';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

axios.defaults.withCredentials = true;

Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);

Vue.component('Loading', Loading);
Vue.component('ValidationProvider', ValidationProvider);
localize('zh_TW', zhTW);

extend('email', email);
extend('required', {
  ...required,
  message: '必須輸入資料',
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const url = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(url).then((response) => {
      if (response.data.success) {
        next();
      } else { next({ path: '/login' }); }
    });
  } else { next(); }
});
