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
        <tr v-for="(item, index) in list" :key="item.date">
          <td>{{ index + 1 }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PaymentListData",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
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
</style>
