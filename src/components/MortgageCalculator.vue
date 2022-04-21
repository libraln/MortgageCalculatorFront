<template>
  <h1 class="main-title">Mortgage Calculator Page</h1>
  <label for="initLoan" class="form-label mt-2">Initial Loan</label>
  <input type="number" class="form-control" id="initLoan" v-model="initLoan" />
  <label for="downPayment" class="form-label mt-2">Down Payment</label>
  <input
    type="number"
    class="form-control"
    id="downPayment"
    v-model="downPayment"
  />
  <label for="bankName" class="form-label mt-2">Bank</label>
  <input
    disabled
    type="text"
    class="form-control"
    id="bankName"
    v-model="bank.name"
  />
  <label for="bankLoanTerm" class="form-label mt-2">Bank</label>
  <input
    disabled
    type="number"
    class="form-control"
    id="bankLoanTerm"
    v-model="bank.loanTerm"
  />
  <router-link :to="{ name: 'bank' }" class="btn button-dark mt-2 me-2"
    >To banks</router-link
  >
  <button @click.prevent="calcMonthlyPayment()" class="btn btn-success mt-2">
    Apply
  </button>

  <div>Your monthly payment: {{ M.toFixed(2) }}</div>
</template>

<script>
import CommonFecth from "../commonFetch";
export default {
  data() {
    return {
      initLoan: 0,
      downPayment: 0,
      bank: {},
      bankCards: [],
      M: 0,
      id: this.$route.params["id"],
    };
  },
  async mounted() {
    let newFetch = new CommonFecth("http://localhost:3000/bank");
    this.bankCards = await newFetch.get();
    this.bank = this.bankCards.find((el) => el._id === this.id);
  },
  methods: {
    calcMonthlyPayment() {
      let P = +this.initLoan;
      let r = +this.bank.interestRate / 100;
      let n = +this.bank.loanTerm * 12;
      this.M =
        (P * (r / 12) * Math.pow(1 + r / 12, n)) /
        (Math.pow(1 + r / 12, n) - 1);
      this.initLoan = 0;
      this.downPayment = 0;
      return this.M;
    },
  },
};
</script>
