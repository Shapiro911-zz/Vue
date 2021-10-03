const state = {
    paymentData: [],
    currentList: [],
    totalPages: null,
    limit: 3,
}

const mutations = {
    setPaymentData(state, paymentData) {
        let flag = false;
        for (let i = 0; i < paymentData.length; i++) {
            for (let j = 0; j < state.paymentData.length; j++) {
                if (state.paymentData[j].id == paymentData[i].id) {
                    flag = true;
                }
            }
            if (flag == false) {
                state.paymentData.push(paymentData[i]);
            }
            flag = false;
        }
        state.totalPages = Math.ceil(state.paymentData.length / state.limit);
    },
    addNewPayment(state, data) {
        state.paymentData.push(data);
    },
}

const actions = {
    fetchData({ commit }, page) {
        let from = (page - 1) * state.limit;
        let to = from + state.limit;
        fetch('https://shapiro911.github.io/DB/data/paymentData.json')
            .then(response => response.json())
            .then(res => {
                commit('setPaymentData', res)
                state.currentList = state.paymentData.slice(from, to)
            })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}