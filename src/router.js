import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Register from './views/Register.vue'; 
import Login from './views/Login.vue';

const router = createRouter ({
  history: createWebHistory(),
  routes:[

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }
]


})
export default router;
