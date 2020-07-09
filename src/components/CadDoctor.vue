<template>
  <div class="container" style="max-width: 100%;">

    <NavBar></NavBar>
    <br />
     <b-container class="bv-example-row mb-2">
     
     <b-col md="3" class="list-group-item card">

      <h3>Cadastro Doutores</h3>

      <p class="h4 mb-2"><b-icon-person></b-icon-person> * Nome </p>
      <p>
      <b-input type="text" v-model="todoNome" :state="validation1"></b-input>
      <b-form-invalid-feedback :state="validation1">
      Campos obrigatório.
      </b-form-invalid-feedback>
      </p>
        <br />
      <p class="h4 mb-2"><b-icon-card-list></b-icon-card-list> * CRM </p>
       
      <p>
      <b-input v-model="todoCrm" :state="validationCRM" onkeypress="return event.charCode >= 48 && event.charCode <= 57">></b-input>
      <b-form-invalid-feedback :state="validationCRM">
      Campos obrigatório. (Min. 6 Máx. 10)
      </b-form-invalid-feedback>
      </p>
        <br />
            <p class="h4 mb-2"><b-icon-map></b-icon-map> * UF </p>
           <p>
            <b-select name="selected" v-model="todoUf" :state="validationUF">
            <option disabled value>Selecione:</option>
            <option>AC</option>
            <option>AL</option>
            <option>AM</option>
            <option>AP</option>
            <option>BA</option>
            <option>CE</option>
            <option>DF</option>
            <option>ES</option>
            <option>GO</option>
            <option>MA</option>
            <option>MG</option>
            <option>MS</option>
            <option>MT</option>
            <option>PA</option>
            <option>PB</option>
            <option>PE</option>
            <option>PI</option>
            <option>PR</option>
            <option>RJ</option>
            <option>RN</option>
            <option>RO</option>
            <option>RR</option>
            <option>RS</option>
            <option>SC</option>
            <option>SE</option>
            <option>SP</option>
            <option>TO</option>
          </b-select>

            <br />
          <b-form-invalid-feedback :state="validationUF">
           Campos obrigatório.
          </b-form-invalid-feedback>
        </p>
        <br />
        <br />
              <button class="btn btn-primary" v-on:click="addTodo" href="#"><b-icon-person-plus></b-icon-person-plus> Adicionar</button>
              </b-col>
      </b-container>
    
      <div class="llist">   
      <b-container class="bv-example-row">
        
        <h3>Lista de Doutores</h3>
        <b-row cols="3">
          <b-col md="2" class="list-group-item">
            <p>Nome</p>
          </b-col>
          <b-col md="2" class="list-group-item">
            <p>CRM</p>
          </b-col>
          <b-col md="2" class="list-group-item">
            <p>UF</p>
          </b-col>
        </b-row>
      </b-container>
      <div v-for="doutores in info" :key="doutores.id">
        <b-container class="bv-example-row">
          <b-row cols="3">
            <b-col md="2" class="list-group-item">
              <p class="comment_author">
                <strong>{{ doutores.Nome }}</strong>
              </p>
            </b-col>
            <b-col md="2" class="list-group-item">
              <p>
                <strong>{{ doutores.CRM }}</strong>
              </p>
            </b-col>
            
            <b-col md="2" class="list-group-item">
              <p>
                <strong>{{ doutores.UF }}</strong>
              </p>
            </b-col>

            <b-col md="2" class="list-group-item">
              <button class="btn btn-danger"
                title="Excluir"
                v-on:click.prevent="removeDoctor(doutores.ID)"
                >Excluir</button
              >
            </b-col>

          </b-row>
        </b-container>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios';
import NavBar from "./NavBar";
import Footer from "./Footer";

const baseURL = 'http://localhost:3000/doutores';

export default {
  name: "cadDoutores",
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
  computed: {
      validation1(){
        return this.todoNome.trim() > "";
      },

      validationCRM(){
        return this.todoCrm.trim() > "" && this.todoCrm.length > 5 && this.todoCrm.length < 11;
      },

      validationUF(){
        return this.todoUf.trim() > "";
      }
},
  mounted() {
    axios
      .get(baseURL)
      .then((response) => (this.info = response.data));
  },
  methods: {
      async addTodo() {
      if (this.todoNome.trim() === "") {
      alert('Campo "Nome" é obrigatório!');
      return;
      }

      if (this.todoCrm.trim() === "") {
        alert('Campo "CRM" é obrigatório!');
        return;
      }
      if (this.todoCrm.length < '6' || this.todoCrm.length > '10'){
        alert('Campo "CRM" deve possuir de 6 a 10 dígitos!');
        return;
      }
      if (this.todoUf.trim() === "") {
        alert('Campo "UF" é obrigatório!');
        return;
      }
      else{
      const res = await 
      axios
      .post(baseURL,  { nome: this.todoNome, crm: this.todoCrm, uf: this.todoUf })
      
      this.info = [...this.info, res.data]

      this.todoCrm = ''
      this.todoNome = ''
      this.todoUf =''

      alert('Sucessso ao cadastrar!');
      }
    },

    removeDoctor(ID){
    axios
    .delete("http://localhost:3000/doutores/"+ ID) 
    alert('Sucesso ao excluir!');
}
}
}
</script>


<style scoped>
.card {
position: absolute;
float: left;
}
.llist{
width:50%;
height: 700px;
position: relative;
float: right;
overflow: auto;
}
alert{
  padding: 20px;
  background-color: #f44336;
  color: white;
}
</style>