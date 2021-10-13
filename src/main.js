import Vue from 'vue'
//import vClickOutside from 'v-click-outside'
import App from './App.vue'
import PaymentList from './components/PaymentList'
import store from './store'
import router from './router'
import contextMenu from './plugins/contextMenu'
import vuetify from './plugins/vuetify'

Vue.component('PaymentList', PaymentList);
Vue.use(contextMenu);
//Vue.use(vClickOutside);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  vuetify,
  router
}).$mount('#app')
