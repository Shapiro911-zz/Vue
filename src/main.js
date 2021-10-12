import Vue from 'vue'
import App from './App.vue'
import PaymentList from './components/PaymentList'
import store from './store'

Vue.component('PaymentList', PaymentList);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
