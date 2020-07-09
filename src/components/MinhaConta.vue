<template>
  <div class="container" style="max-width: 100%;">

    <NavBar></NavBar>
    <br />
     <b-container class="bv-example-row mb-2" v-for="users in info" :key="users">
     
     <b-col md="3" class="list-group-item card">
       <h3>Dados Minha Conta</h3>
      <p class="h4 mb-2"><b-icon-person></b-icon-person> Nome (Usuário)</p>
      <p>{{ users.Login }}</p>
      <br />
 
      <p class="h4 mb-2">* Senha</p>
      
        <br />
              </b-col>
      </b-container>
    
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios';
import NavBar from "./NavBar";
import Footer from "./Footer";

const baseURL = 'http://localhost:3000/users';

export default {
  name: "minhaConta",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return { 
      todoCrm: '',
      todoNome: '',
      todoUf:'',
      info: null,
    }
  },
  mounted() {
   axios
      .get(baseURL)
      .then(response => (this.info = response.data))
  },
  methods: {
      /*async addTodo() {
      const res = await 
      axios
      .post(baseURL,  { nome: this.todoNome, crm: this.todoCrm, uf: this.todoUf })

      this.info = [...this.info, res.data]

      this.todoCrm = ''
      this.todoNome = ''
      this.todoUf =''
    },*/
}
}
</script>


<style scoped>
.card {
position: absolute;
float: left;
}
.llist{
position: relative;
float: right;
max-width: 50%;
}
</style>
