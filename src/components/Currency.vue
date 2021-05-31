<template>
  <!-- <router-link :to="{ name: 'Stock', params: { position_id: stock.key } }"> -->
  <div class="preview_content">
    <line-chart
      :data="currency_development"
      :min="min_value"
      :max="max_value"
    ></line-chart>
  </div>
  <!-- </router-link> -->
</template>

<script>
import "chartkick/chart.js";
import axios from "axios";

export default {
  name: "Currency",
  props: {},
  data() {
    return {
      currency_development: [],
      min_value: Number,
      max_value: Number,
    };
  },
  methods: {
    // lengthValues() {
    //     return this.values.length
    // }
  },
  async mounted() {
    await axios
      .get("http://localhost:5000")
      .then((response) => {
        this.currency_development = [];
        var min_value = 100000;
        var max_value = 0;
        for (let i = 0; i < response.data.length; i++) {
          const value = response.data[i][0];
          console.log(value);
          const nr = i;
          if (value > max_value) {
            max_value = value;
          }
          if (value < min_value) {
            min_value = value;
          }
          this.currency_development.push([nr, value]);
          this.max_value = max_value + 0.1;
          this.min_value = min_value - 0.1;
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style scoped></style>
