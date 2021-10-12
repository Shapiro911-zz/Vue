<template>
  <div>
    <PaymentListData />
    <button class="paymentListButton" @click="isVisibleForm = !isVisibleForm">
      Add new cost +
    </button>
    <PaymentForm v-show="isVisibleForm" />
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
      isVisibleForm: false,
    };
  },
};
</script>

<style scoped>
</style>