import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Doutores from '../pages/Doutores.vue'
import Agenda from '../pages/Agenda.vue'
import FormCadPaciente from '../pages/Clientes.vue'
import MinhaConta from '../pages/MinhaConta.vue'
import TesteFormat from "../pages/TestFormat";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/doutores',
    name: 'Doutores',
    component: Doutores
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: Agenda
  },
  {
    path: '/cadastro-paciente',
    name: 'FormCadPaciente',
    component: FormCadPaciente
  },
  {
    path: '/minhaConta',
    name: 'MinhaConta',
    component: MinhaConta
  },
  {
    path: '/teste',
    name: 'testFormat',
    component: TesteFormat
  }
]

const router = new VueRouter({
  routes
})

export default router
