import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import AddExpense from '../components/pages/AddExpenseItem.vue';
import AddIncome from '../components/pages/AddIncomeItem.vue';
import History from '../views/History.vue';
import ExpenseHistory from '../components/pages/ExpenseHistory.vue';
import IncomeHistory from '../components/pages/IncomeHistory.vue';
import AllHistory from '../components/pages/AllHistory.vue';
import Library from '../views/Library.vue';
import ExpenseCategoryLibrary from '../components/pages/ExpenseCategoryLibrary.vue';
import IncomeCategoryLibrary from '../components/pages/IncomeCategoryLibrary.vue';
import ExpenseCategoryForm from '../components/pages/ExpenseCategoryForm.vue';
import IncomeCategoryForm from '../components/pages/IncomeCategoryForm.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'AddExpense',
        component: AddExpense
      },
      {
        path: '/home/income',
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
        components: {
          default: ExpenseCategoryLibrary,
          addCategoryForm: ExpenseCategoryForm
        }
      },
      {
        path: 'income',
        name: 'IncomeCategoryLibrary',
        components: {
          default: IncomeCategoryLibrary,
          addCategoryForm: IncomeCategoryForm
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
