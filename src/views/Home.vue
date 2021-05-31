<template>
  <div class="home">
    <Currency />
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h1>Hi there!</h1>
    <!-- <AllStocks /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Currency from "@/components/Currency";
import AllStocks from "@/components/AllStocks";

export default {
  name: "Home",
  components: {
    AllStocks,
    Currency,
  },
};
</script>
