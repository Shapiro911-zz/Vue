<template>
  <v-app>
    <v-app-bar></v-app-bar>
    <v-system-bar></v-system-bar>
    <v-main>
      <div id="app">
        <Calculator v-if="0" />
        <PaymentList />
      </div>
    </v-main>
    <v-bottom-navigation></v-bottom-navigation>
    <v-footer></v-footer>
  </v-app>
</template>

<script>
import Calculator from "./components/Calculator.vue";
import PaymentList from "./components/PaymentList.vue";

export default {
  name: "App",
  components: {
    Calculator,
    PaymentList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.paymentListButton {
  background-color: rgb(35, 175, 161);
  color: white;
  text-transform: uppercase;
  padding: 10px 50px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-right: auto;
}
</style>
