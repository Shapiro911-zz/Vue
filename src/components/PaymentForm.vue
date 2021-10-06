<template>
  <div class="container">
    <form id="paymentAdd">
      <input type="text" placeholder="Payment description" v-model="category" />
      <input type="text" placeholder="Payment amount" v-model="value" />
      <input type="text" placeholder="Payment date" v-model="date" />
      <button class="paymentListButton" type="button" @click="addPayment">
        Add +
      </button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "PaymentForm",
  data() {
    return {
      id: null,
      category: "",
      value: null,
      date: "",
    };
  },
  methods: {
    ...mapActions("paymentData", ["addNewPayment"]),
    addPayment() {
      const data = {
        id: this.paymentData.length + 1,
        category: this.category,
        value: this.value,
        date: this.date,
      };
      this.addNewPayment(data);
    },
  },
  computed: {
    ...mapState("paymentData", ["paymentData"]),
  },
};
</script>

<style scoped>
#paymentAdd {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-top: 40px;
}

input {
  margin-bottom: 10px;
  padding: 10px;
}
</style>