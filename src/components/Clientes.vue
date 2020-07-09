<template>
  <div class="container">
    <div class="list-group">
    <h1>Cadastro Doutores</h1>
    <input type="text" v-model="cliNome">

    <input type="text" v-model="cliCpf">

    <button v-on:click="addTodo">Adicionar</button>
    <ul>
      <h3>Lista de Doutores</h3>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.Nome }}, {{ todo.CPF }}
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const baseURL = "http://localhost:3000/clientes"

export default {
    name: "clientes",
  data() {
    return {

      todos: [],  
      cliNome: '',
      cliCpf: ''
    }
  },
  mounted() {
    axios
      .get(baseURL)
      .then((response) => (this.todos = response.data));
  },
  methods: {
      async addTodo () {
      const res = await 
      axios
      .post(baseURL, { nome: this.cliNome }, { cpf: this.cliCpf })

      this.todos = [...this.todos, res.data]

      this.cliNome = ''

      this.cliCpf = ''
    },

}
}
</script>

<style scoped>
div{
  text-align: center;
  max-width: 100%;  
}
</style>