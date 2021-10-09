import Vue from 'vue'
import VueRouter from 'vue-router'
import addPayment from './addPaymentRoutes'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'paymentList',
            component: () => import('../components/PaymentList.vue')
        },
        ...addPayment,
        {
            path: '/calculator',
            name: 'calculator',
            component: () => import('../components/Calculator.vue')
        },
    ]
})
