<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h1>Hi there!</h1>
    <AllStocks />
  </div>
</template>

<script>
// @ is an alias to /src
import AllStocks from "@/components/AllStocks";

export default {
  name: "Home",
  components: {
    AllStocks,
  },
};
</script>
