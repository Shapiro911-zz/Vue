import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'paymentList',
            component: () => import('../components/PaymentList.vue')
        },
        {
            path: '/form',
            name: 'addPayment',
            component: () => import('../components/PaymentForm.vue')
        },
        {
            path: '/form/?category=category?value=value',
            name: 'addPayment',
            component: () => import('../components/PaymentForm.vue')
        },
        {
            path: '/calculator',
            name: 'calculator',
            component: () => import('../components/Calculator.vue')
        },
        {
            path: '*',
            name: '404',
            component: () => import('../components/404.vue')
        }
    ]
})
