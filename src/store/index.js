import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import paymentData from './paymentData'

export default new Vuex.Store({
    modules: {
        paymentData
    }
})