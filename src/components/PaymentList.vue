<template>
  <div>
    <PaymentListData :list="responseData" />
    <button class="paymentListButton" @click="isVisibleForm = !isVisibleForm">
      Add new cost +
    </button>
    <PaymentForm v-show="isVisibleForm" @addPayment="addNewPayment" />
  </div>
</template>

<script>
import PaymentListData from "./PaymentListData";
import PaymentForm from "./PaymentForm";
export default {
  name: "PaymentList",
  components: {
    PaymentListData,
    PaymentForm,
  },
  data() {
    return {
      responseData: [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 368,
        },
        {
          date: "26.03.2020",
          category: "Food",
          value: 532,
        },
      ],
      isVisibleForm: false,
    };
  },
  methods: {
    addNewPayment(data) {
      this.responseData = [...this.responseData, data];
    },
  },
};
</script>

<style scoped>
</style>