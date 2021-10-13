<template>
  <div class="container">
    <v-simple-table id="paymentTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Category</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in currentList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.value }}</td>
          <td class="extra" @click="showMenu(item.id)">&#8942;</td>
          <ContextMenu :item="item" :isVisibleId="isVisibleId" />
        </tr>
      </tbody>
    </v-simple-table>
    <div class="pagination">
      <v-btn @click="prevPage">←</v-btn>
      <v-btn
        v-for="(page, index) in totalPages"
        :key="page"
        @click="choosePage(index + 1)"
      >
        {{ index + 1 }}
      </v-btn>
      <v-btn @click="nextPage">→</v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import ContextMenu from "./ContextMenu";
export default {
  name: "PaymentListData",
  components: {
    ContextMenu,
  },
  data() {
    return {
      list: [],
      isVisibleId: null,
    };
  },
  methods: {
    ...mapActions("paymentData", ["fetchData"]),
    ...mapMutations("paymentData", ["setCurrentPage"]),
    choosePage(page) {
      this.setCurrentPage(page);
      this.fetchData(this.currentPage);
    },
    prevPage() {
      if (this.currentPage != 1) {
        let page = this.currentPage - 1;
        this.setCurrentPage(page);
        this.fetchData(this.currentPage);
      }
    },
    nextPage() {
      if (this.currentPage != this.totalPages) {
        let page = this.currentPage + 1;
        this.setCurrentPage(page);
        this.fetchData(this.currentPage);
      }
    },
    showMenu(id) {
      this.isVisibleId = id;
      this.$contextMenu.show();
    },
  },
  computed: {
    ...mapState("paymentData", [
      "paymentData",
      "totalPages",
      "currentList",
      "currentPage",
    ]),
  },
  created() {
    this.fetchData(this.currentPage);
  },
};
</script>

<style scoped>
#paymentTable {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  margin-bottom: 40px;
}

th {
  padding-bottom: 10px;
}

tbody tr {
  border-top: 1px solid grey;
  position: relative;
}

td {
  padding: 10px 0;
}

.pagination {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 40px;
}

.extra {
  cursor: pointer;
}
</style>
