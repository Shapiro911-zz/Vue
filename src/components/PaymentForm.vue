<template>
  <div class="container">
    <v-form id="paymentAdd">
      <v-text-field
        type="text"
        name="category"
        placeholder="Payment description"
        v-model="category"
      />
      <v-text-field
        type="text"
        name="value"
        placeholder="Payment amount"
        v-model.number="value"
      />
      <v-text-field
        type="text"
        name="date"
        placeholder="Payment date"
        v-model="date"
      />
      <v-btn type="button" @click="addPayment" v-show="isFull"> Add + </v-btn>
    </v-form>
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