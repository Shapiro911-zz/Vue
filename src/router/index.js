import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'PaymentList',
        components: () => import('../components/PaymentList.vue')
    },
    {
        path: '*',
        name: '404',
        components: () => import('../components/404.vue')
    }
]

export default routes;