<template>
  <!-- <router-link :to="{ name: 'Stock', params: { position_id: stock.key } }"> -->
  <div class="preview_content">
    <div class="s1">
      <h3 class="title">{{ stock.open }}</h3>
      <p class="company">{{ stock.high }}</p>
    </div>
    <h1>Hi 2</h1>
    <div class="s2">
      <p class="deadline">📅 {{ stock.low }}</p>
      <p class="location">📍 {{ stock.close }}</p>
    </div>
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
  width: 50vw;
  padding: 10px 30px 10px 30px;
  margin: 10px;
  background: #0d698b;
}

.s1 {
  flex-grow: 5;
  text-align: left;
}

.s2 {
  flex-grow: 3;
  text-align: right;
}
</style>
