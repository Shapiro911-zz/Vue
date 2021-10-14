<template>
  <div class="menu">
    <button>Redact</button>
    <button>Delete</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ContextMenu",
  data() {
    return {
      isHidden: true,
    };
  },
  methods: {
    ...mapActions("paymentData", ["redactPayment", "deletePayment"]),
    deletePayment() {},
  },
};
</script>

<style scoped>
.menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  border: 1px solid grey;
  z-index: 3;
  border-radius: 3px;
  box-shadow: 0 0 5px 2px silver;
  right: -2px;
  top: 30px;
  background: white;
}

.menu:before {
  content: "";
  display: block;
  width: 12px;
  height: 12px;
  position: absolute;
  top: -7px;
  left: 34px;
  transform: rotate(45deg);
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  background-color: white;
}

button {
  border: none;
  background: none;
  padding: 0 10px;
  font-size: 14px;
}
</style>