<template>
  <div class="wrapper">
    <h1 class="main-title">Bank Management Page</h1>
    <router-link :to="{ name: 'createBank' }" class="btn button-dark mt-2"
      >Create New Bank</router-link
    >
    <!-- <router-link :to="{ name: 'calculator' }" class="btn button-dark mt-2 ms-2"
      >Calculate Monthly Payment</router-link
    > -->
    <div class="card-container mt-2">
      <div
        class="bank-card me-2 mb-2"
        v-for="bankCard in bankCards"
        :key="bankCard._id"
      >
        <div>
          <div class="title">{{ bankCard.name }}</div>
          <div><b>Interest rate:</b> {{ bankCard.interestRate }}</div>
          <div><b>Maximum loan: </b>{{ bankCard.maxLoan }}</div>
          <div><b>Minimum Down Payment: </b>{{ bankCard.minDownPayment }}</div>
          <div><b>Loan term: </b>{{ bankCard.loanTerm }}</div>
        </div>
        <div class="btn-container">
          <router-link
            :to="{ name: 'editBank', params: { id: bankCard._id } }"
            class="btn button-dark mt-2"
            >Edit
          </router-link>
          <router-link
            :to="{ name: 'calculator', params: { id: bankCard._id } }"
            class="btn button-dark mt-2 ms-2"
            >Calculate</router-link
          >
          <button
            type="button"
            class="btn btn-danger mt-2"
            @click="deleteBank(bankCard._id)"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import CommonFetch from "../commonFetch.js";
export default {
  data() {
    return {
      bankCards: [],
    };
  },
  async mounted() {
    let newFetch = new CommonFetch("http://localhost:3000/bank");
    this.bankCards = await newFetch.get();
  },
  methods: {
    async deleteBank(id) {
      let newFetch = new CommonFetch(`http://localhost:3000/bank?id=${id}`);
      await newFetch.delete();
      this.bankCards = this.bankCards.filter((el) => {
        return el._id !== id;
      });
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

body {
  max-width: 100%;
}

.card-container {
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
}
.bank-card {
  width: 300px;
  border: 2px solid grey;
  padding: 10px;
}
.bank-card:hover {
  background: #ffc038;
}
.btn-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.card-container {
  flex-wrap: wrap;
  display: flex;
  justify-content: start;
}
.title {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
</style>
