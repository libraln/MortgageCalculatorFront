<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import BankManagement from "./components/BankManagement.vue";
import BankCreation from "./components/BankCreation.vue";

export default {
  name: "App",
  components: {
    BankManagement,
    BankCreation,
  },
};
</script>

<style>
.main-title {
  text-align: center;
}
.button-dark {
  background-color: #464646;
  color: white;
}
.button-dark:hover {
  color: lightgrey;
}
</style>


