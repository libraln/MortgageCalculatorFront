<template>
  <h1 class="main-title">Bank Creating Page</h1>
  <label for="name" class="form-label mt-2">Name</label>
  <input type="text" class="form-control mt-2" id="name" v-model="name" />
  <label for="interestRate" class="form-label mt-2">Interest Rate</label>
  <input
    type="number"
    class="form-control mt-2"
    id="interestRate"
    v-model="interestRate"
  />
  <label for="maxLoan" class="form-label mt-2">Maximum Loan</label>
  <input
    type="number"
    class="form-control mt-2"
    id="maxLoan"
    v-model="maxLoan"
  />
  <label for="minDownPayment" class="form-label mt-2"
    >Minimun Down Payment</label
  >
  <input
    type="number"
    class="form-control mt-2"
    id="minDownPayment"
    v-model="minDownPayment"
  />
  <label for="loanTerm" class="form-label mt-2">Loan Term</label>
  <input
    type="number"
    class="form-control mt-2"
    id="loanTerm"
    v-model="loanTerm"
  />
  <button class="btn btn-success mt-2 me-2" @click.prevent="saveBank()">
    Save
  </button>
  <router-link :to="{ name: 'bank' }" class="btn button-dark mt-2 me-2"
    >To banks</router-link
  >
</template>

<script>
import CommonFecth from "../commonFetch";

export default {
  data() {
    return {
      name: "",
      interestRate: 0,
      maxLoan: 0,
      minDownPayment: 0,
      loanTerm: 0,
    };
  },
  methods: {
    async saveBank() {
      let newFetch = new CommonFecth(
        `http://localhost:3000/bank?name=${this.name}&interestRate=${this.interestRate}&maxLoan=${this.maxLoan}&minDownPayment=${this.minDownPayment}&loanTerm=${this.loanTerm}`
      );
      await newFetch.post({
        "Content-Type": "application/json",
      });
      this.$router.push("/");
    },

  },
};
</script>
