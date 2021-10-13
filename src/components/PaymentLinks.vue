<template>
  <div class="container">
    <div class="links">
      <v-btn
        v-for="item in list"
        :key="item.category"
        class="linksButton"
        @click="linkHandler(item)"
      >
        Add {{ item.category }}: {{ item.params.value }}
      </v-btn>
    </div>
    <v-btn @click="openForm()"> Add new cost + </v-btn>
  </div>
</template>

<script>
import { linkButtons } from "../assets/selects";
import { mapMutations } from "vuex";
export default {
  name: "PaymentLinks",
  data() {
    return {
      visibleForm: false,
    };
  },
  computed: {
    list() {
      return linkButtons;
    },
  },
  methods: {
    ...mapMutations("paymentData", ["setFormVisible"]),
    linkHandler(item) {
      const { category: name, params } = item;
      if (this.$route.name !== name) {
        this.$router.push({ name, params });
      }
      this.visibleForm = true;
      this.setFormVisible(this.visibleForm);
    },
    openForm() {
      this.visibleForm = !this.visibleForm;
      this.setFormVisible(this.visibleForm);
    },
  },
};
</script>

<style scoped>
.links {
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.linksButton {
  padding: 20px 30px;
  border-radius: 5px;
  color: rgba(0, 163, 255, 0.9);
  border: 1px solid rgba(0, 163, 255, 0.2);
  transition: 0.3s;
  cursor: pointer;
}

.linksButton:hover {
  transition: 0.3s;
  transform: scale(1.01);
  box-shadow: 1px 2px 10px rgba(0, 163, 255, 0.2);
}

.container {
  margin-bottom: 40px;
}
</style>