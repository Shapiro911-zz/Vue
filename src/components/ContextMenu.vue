<template>
  <transition name="fade">
    <div class="menu" v-show="isVisibleMenu && isVisibleId == item.id">
      <button @click="showRedactForm">Redact</button>
      <div class="redactMenu" v-show="isVisibleForm">
        <input
          type="text"
          placeholder="Payment description"
          v-model="category"
        />
        <input type="text" placeholder="Payment amount" v-model="value" />
        <input type="text" placeholder="Payment date" v-model="date" />
        <button class="paymentListButton" type="button" @click="redactItem()">
          Redact
        </button>
      </div>
      <button @click="deleteItem(item.id)">Delete</button>
    </div>
  </transition>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ContextMenu",
  props: {
    item: {
      type: Object,
    },
    isVisibleId: {
      type: Number,
    },
  },
  data() {
    return {
      isVisibleMenu: false,
      isVisibleForm: false,
      id: this.item.id,
      category: this.item.category,
      value: this.item.value,
      date: this.item.date,
    };
  },
  methods: {
    ...mapActions("paymentData", [
      "redactPayment",
      "deletePayment",
      "redactPayment",
    ]),
    showMenu() {
      this.isVisibleMenu = !this.isVisibleMenu;
    },
    deleteItem(id) {
      this.deletePayment(id);
    },
    showRedactForm() {
      this.isVisibleForm = !this.isVisibleForm;
    },
    redactItem() {
      const data = {
        id: this.id,
        category: this.category,
        value: this.value,
        date: this.date,
      };
      this.redactPayment(data);
    },
  },
  mounted() {
    this.$contextMenu.EventBus.$on("show", this.showMenu);
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

.redactMenu {
  display: flex;
  flex-direction: column;
}

button {
  border: none;
  background: none;
  padding: 0 10px;
  font-size: 14px;
  cursor: pointer;
  color: black;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>