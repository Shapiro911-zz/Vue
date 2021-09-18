<template>
  <div>
    <input type="Text" v-model.number="operand1" />
    <p>{{ result }}</p>
    <input type="Text" v-model.number="operand2" />
    <button @click="sum">+</button>
    <button @click="difference">-</button>
    <button @click="product">*</button>
    <button @click="quotient">/</button>
    <button @click="exponentiation">exp</button>
    <button @click="div">div</button>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      result: "",
      operand1: "",
      operand2: "",
    };
  },
  methods: {
    sum() {
      this.result = this.operand1 + this.operand2;
    },
    difference() {
      this.result = this.operand1 - this.operand2;
    },
    product() {
      this.result = this.operand1 * this.operand2;
    },
    quotient() {
      this.result = this.operand1 / this.operand2;
    },
    exponentiation() {
      this.result = Math.pow(this.operand1, this.operand2);
    },
    div() {
      this.result = Math.floor(this.operand1 / this.operand2);
    },
  },
};
</script>

<style scoped>
</style>