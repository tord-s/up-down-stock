<template>
  <!-- <router-link :to="{ name: 'Stock', params: { position_id: stock.key } }"> -->
  <div class="preview_content">
    <p class="title">Opening: {{ stock.open }}</p>
    <p class="company">High: {{ stock.high }}</p>
    <p class="deadline">Low: {{ stock.low }}</p>
    <p class="location">Closing: {{ stock.close }}</p>
  </div>
  <!-- </router-link> -->
</template>

<script>
export default {
  name: "Stock",
  props: {
    stock: Object,
  },
  data() {
    return {};
  },
  methods: {
    // lengthValues() {
    //     return this.values.length
    // }
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.preview_content {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 50vw;
  height: auto;
  padding: 10px 30px 10px 30px;
  margin: 10px;
  background: #0d698b;
  color: white;
}

.preview_content > p {
  margin: 10px;
}
</style>
