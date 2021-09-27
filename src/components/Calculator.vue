<template>
  <div>
    <input type="Text" placeholder="0" v-model="operand1" />
    <p class="title" v-show="!error">{{ result }}</p>
    <p v-show="error">Error</p>
    <div>
      <input type="Text" placeholder="0" v-model="operand2" />
      <button
        @click="calculateHandler(operator)"
        v-for="operator in operators"
        :key="operator"
      >
        {{ operator }}
      </button>
    </div>
    <input type="checkbox" id="keyboard" v-model="isVisibleKeys" />
    <label for="keyboad">Отобразить экранную клавиатуру</label>
    <div v-show="isVisibleKeys">
      <button v-for="index in 9" :key="index" @click="addDigit(index)">
        {{ index }}
      </button>
      <button @click="removeDigit">←</button>
      <br />
      <input
        type="radio"
        id="operand1"
        name="operand"
        value="operand1"
        v-model="checkedOperand"
      />
      <label for="operand1">Операнд 1</label>
      <input
        type="radio"
        id="operand2"
        name="operand"
        value="operand2"
        v-model="checkedOperand"
      />
      <label for="operand2">Операнд 2</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      result: 0,
      operand1: "",
      operand2: "",
      isVisibleKeys: false,
      error: false,
      checkedOperand: "operand1",
      operators: ["+", "-", "*", "/", "exp", "div"],
    };
  },
  methods: {
    calculateHandler(operator) {
      this.error = false;
      let operandCheck = new RegExp(/^0\d+|[A-Za-z]/, "i");
      if (
        operandCheck.test(this.operand1) ||
        operandCheck.test(this.operand2)
      ) {
        this.error = true;
      }
      switch (operator) {
        case "+":
          this.result = parseInt(this.operand1) + parseInt(this.operand2);
          break;
        case "-":
          this.result = this.operand1 - this.operand2;
          break;
        case "*":
          this.result = this.operand1 * this.operand2;
          break;
        case "/":
          this.result = this.operand1 / this.operand2;
          if (this.operand2 == 0) {
            this.error = true;
          }
          break;
        case "exp":
          this.result = Math.pow(this.operand1, this.operand2);
          break;
        case "div":
          this.result = Math.floor(this.operand1 / this.operand2);
          if (this.operand2 == 0) {
            this.error = true;
          }
          break;
      }
    },
    addDigit(digit) {
      if (this.checkedOperand == "operand1") {
        this.operand1 += digit;
      } else if (this.checkedOperand == "operand2") {
        this.operand2 += digit;
      }
    },
    removeDigit() {
      if (this.checkedOperand == "operand1") {
        this.operand1 = this.operand1.slice(0, -1);
      } else if (this.checkedOperand == "operand2") {
        this.operand2 = this.operand2.slice(0, -1);
      }
    },
  },
};
</script>

<style scoped>
</style>