import { createWebHistory, createRouter } from "vue-router";
import BankManagement from './components/BankManagement'
import MortgageCalculator from './components/MortgageCalculator'
import BankCreation from './components/BankCreation'
import BankEdition from './components/BankEdition'

const routes= [
        {
            path: '/',
            name: 'bank',
            component: BankManagement
        },
        {
            path: '/create',
            name: 'createBank',
            component: BankCreation
        },
        {
            path: '/bank/:id',
            name: 'editBank',
            component: BankEdition,
        },
        {
            path: '/calculator/:id',
            name: 'calculator',
            component: MortgageCalculator
        },
    ]
    const router = createRouter({
        history: createWebHistory(),
        routes,
      });
export default router
