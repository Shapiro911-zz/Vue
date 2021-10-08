<template>
  <div class="container">
    <form id="paymentAdd">
      <input type="text" placeholder="Payment description" v-model="category" />
      <input type="text" placeholder="Payment amount" v-model="value" />
      <input type="text" placeholder="Payment date" v-model="date" />
      <button
        class="paymentListButton"
        type="button"
        @click="addPayment"
        v-if="isFull"
      >
        Add +
      </button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { getCurrentDate } from "../utils";
import { linkButtons } from "../assets/selects";
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
    getCurrentDate,
    setParams() {
      if (this.routeNameCheck()) {
        this.date = this.getCurrentDate();
        this.category = this.$route.name;
        this.category = this.category[0].toUpperCase() + this.category.slice(1);
        this.value = this.$route.params?.value;
      }
    },
    addPayment() {
      const data = {
        id: this.paymentData.length + 1,
        category: this.category,
        value: this.value,
        date: this.date,
      };
      this.addNewPayment(data);
    },
    routeNameCheck() {
      return this.list.some((item) => item.category === this.$route.name);
    },
  },
  computed: {
    ...mapState("paymentData", ["paymentData"]),
    list() {
      return linkButtons;
    },
    getRouteParams() {
      return {
        name: this.$route.name,
        params: this.$route.params,
      };
    },
    isFull() {
      return this.date && this.category && this.value;
    },
  },
  watch: {
    $route() {
      this.setParams();
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