<template>
  <div>
    <PaymentListData />
    <PaymentLinks />
    <PaymentForm v-show="isVisibleForm == true" />
  </div>
</template>

<script>
import PaymentListData from "./PaymentListData";
import PaymentForm from "./PaymentForm";
import PaymentLinks from "./PaymentLinks";
import { mapState } from "vuex";
export default {
  name: "PaymentList",
  components: {
    PaymentListData,
    PaymentForm,
    PaymentLinks,
  },
  computed: {
    ...mapState("paymentData", ["isVisibleForm"]),
  },
  methods: {
    link(category, value) {
      this.$router.push({
        name: "addPayment",
        query: { category: category, value: value },
      });
    },
  },
};
</script>

<style scoped>
</style>