import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddExpense from '../components/pages/AddExpenseItem.vue'
import AddIncome from '../components/pages/AddIncomeItem.vue'
import History from '../views/History.vue'
import ExpenseHistory from '../components/pages/ExpenseHistory.vue'
import IncomeHistory from '../components/pages/IncomeHistory.vue'
import AllHistory from '../components/pages/AllHistory.vue'
import Library from '../views/Library.vue'
import ExpenseCategoryLibrary from '../components/pages/ExpenseCategoryLibrary.vue'
import IncomeCategoryLibrary from '../components/pages/IncomeCategoryLibrary.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        name: 'AddExpense',
        component: AddExpense
      },
      {
        path: '/income',
        name: 'AddIncome',
        component: AddIncome
      }
    ]
  },
  {
    path: '/history',
    component: History,
    children: [
      {
        path: '/',
        name: 'AllHistory',
        component: AllHistory
      },
      {
        path: 'expense',
        name: 'ExpenseHistory',
        component: ExpenseHistory
      },
      {
        path: 'income',
        name: 'IncomeHistory',
        component: IncomeHistory
      }
    ]
  },
  {
    path: '/library',
    component: Library,
    children: [
      {
        path: '/',
        name: 'ExpenseCategoryLibrary',
        component: ExpenseCategoryLibrary
      },
      {
        path: 'income',
        name: 'IncomeCategoryLibrary',
        component: IncomeCategoryLibrary
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
