<template>
  <div class="container">
    <table id="paymentTable">
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
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="prevPage">←</button>
      <button
        v-for="(page, index) in totalPages"
        :key="page"
        @click="choosePage(index + 1)"
      >
        {{ index + 1 }}
      </button>
      <button @click="nextPage">→</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "PaymentListData",
  data() {
    return {
      list: [],
      currentPage: 1,
    };
  },
  methods: {
    ...mapActions("paymentData", ["fetchData"]),
    choosePage(page) {
      this.currentPage = page;
      this.fetchData(this.currentPage);
    },
    prevPage() {
      if (this.currentPage != 1) {
        this.currentPage--;
        this.fetchData(this.currentPage);
      }
    },
    nextPage() {
      if (this.currentPage != this.totalPages) {
        this.currentPage++;
        this.fetchData(this.currentPage);
      }
    },
  },
  computed: {
    ...mapState("paymentData", ["paymentData", "totalPages", "currentList"]),
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
</style>
