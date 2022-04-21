      <template>
  <h1 class="main-title">Bank Editing Page</h1>
  <label for="name" class="form-label mt-2">Name</label>
  <input type="text" class="form-control mt-2" id="name" v-model="bank.name" />
  <label for="interestRate" class="form-label mt-2">Interest Rate</label>
  <input
    type="number"
    class="form-control mt-2"
    id="interestRate"
    v-model="bank.interestRate"
  />
  <label for="maxLoan" class="form-label mt-2">Maximum Loan</label>
  <input
    type="number"
    class="form-control mt-2"
    id="maxLoan"
    v-model="bank.maxLoan"
  />
  <label for="minDownPayment" class="form-label mt-2"
    >Minimun Down Payment</label
  >
  <input
    type="number"
    class="form-control mt-2"
    id="minDownPayment"
    v-model="bank.minDownPayment"
  />
  <label for="loanTerm" class="form-label mt-2">Loan Term</label>
  <input
    type="number"
    class="form-control mt-2"
    id="loanTerm"
    v-model="bank.loanTerm"
  />
  <button class="btn btn-success mt-2 me-2" @click.prevent="editBank()">
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
      bank: [],
      id: this.$route.params["id"],
    };
  },

  async mounted() {
    let newFetch = new CommonFecth(
      `http://localhost:3000/bank?id=${this.id}`
    );
    this.bankCard = await newFetch.get();
    console.log(this.bankCard); 
    this.bank = this.bankCard[0];
  },
  methods: {
    async editBank() {
      (this.name = this.bank.name),
        (this.interestRate = this.bank.interestRate),
        (this.maxLoan = this.bank.maxLoan),
        (this.minDownPayment = this.bank.minDownPayment),
        (this.loanTerm = this.bank.loanTerm);
      let newFetch = new CommonFecth(
        `http://localhost:3000/bank?id=${this.id}&name=${this.name}&interestRate=${this.interestRate}&maxLoan=${this.maxLoan}&minDownPayment=${this.minDownPayment}&loanTerm=${this.loanTerm}`
      );
      await newFetch.put();
      this.$router.push("/");
    },
  },
};
</script>
