import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddExpense from '../components/pages/AddExpenseItem.vue'
import AddIncome from '../components/pages/AddIncomeItem.vue'
import AddCategory from '../views/AddCategoryPage.vue'
import History from '../views/History.vue'
import ExpenseHistory from '../components/pages/ExpenseHistory.vue'
import IncomeHistory from '../components/pages/IncomeHistory.vue'
import AllHistory from '../components/pages/AllHistory.vue'

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
    path: '/add-category',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
