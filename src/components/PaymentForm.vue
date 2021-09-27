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
export default {
  name: "PaymentForm",
  data() {
    return {
      category: "",
      value: null,
      date: "",
    };
  },
  methods: {
    addPayment() {
      const data = {
        category: this.category,
        value: this.value,
        date: this.date,
      };
      this.$emit("addPayment", data);
    },
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