<template>
  
 <div class="container" style="max-width: 100%;">

    <NavBar></NavBar>
    <br/>
<div class="form-todo form-group" style="max-width: 100%;">
   <br/>
    <div class="list-group" style="max-width: 100%;float: center;">
      <br />
      <b-container class="bv-example-row mb-3">
        <b-col md="6" class="list-group-item card">
        <p>
          Nome:
          <b-input
            placeholder="nome"
            name="NomePaciente"
            class="form-control"
            v-model="nomePaciente"
            :state="validation"
          >
          </b-input>
          <b-form-invalid-feedback :state="validation">
           Campo obrigatório.
          </b-form-invalid-feedback>

          <b-form-valid-feedback :state="validation">
            Ok.
          </b-form-valid-feedback>
        </p>
        <p>
          Data:
          <b-input
            type="date"
            name="Data"
            class="form-control"
            v-model="dataMarc"
            :state="validationData"
          >
          </b-input>
        </p>
        <p>
          Das:
          <b-input 
          type="time"
          name="HorarioEnt" 
          class="form-control" 
          v-model="horarioEnt"
          :state="validation2"
          >
          </b-input>
           <b-form-invalid-feedback :state="validation2">
           Campo obrigatório.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validation2">
            Ok.
          </b-form-valid-feedback>
        </p>
        <p>
          às:
          <b-input 
          type="time"
          name="HorarioSaida" 
          class="form-control" 
          v-model="horarioSaida" 
          :state="validation2">
          </b-input>
           <b-form-invalid-feedback :state="validation2">
           Campo obrigatório.
           (Não pode ser maior que Horário de entrada)
          </b-form-invalid-feedback>

          <b-form-valid-feedback :state="validation2">
            Ok.
          </b-form-valid-feedback>
        </p>

        <p>
          Doutor(a):
          <b-select name="selected" v-model="selected" :state="validationDoutor">
            <option disabled value>Selecione:</option>
            <option v-for="doutores in doct" v-bind:key="doutores">
              {{ doutores.Nome }}
              </option>
          </b-select>
          <br />
        </p>

        <p>
          <button class="btn btn-primary" type="submit" v-on:click="addTodo">Adicionar</button>
        </p>
         </b-col>
      </b-container>
    </div>
    <Footer></Footer>
  </div>
 </div> 
</template>

<script>
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";
const baseURL = "http://localhost:3000/agenda"

export default {
   name: "FormCadPaciente",
   components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      nomePaciente: "",
      horarioEnt: "",
      horarioSaida: "",
      dataMarc: "",
      selected: "",
      doct: null,
      info: null
    };   
  },
  computed: {
    validation(){
    return this.nomePaciente.trim() > "";
  },

  validation2(){
    return this.horarioEnt.trim() > '00:00' && this.horarioSaida.trim() > '00:00' && this.horarioSaida.trim() > this.horarioEnt.trim();
  },

  validationData(){
    return this.dataMarc.trim() > '0000/00/00';
  },

  validationDoutor(){
    return this.selected.trim() > "";
  }
  },
  methods: {
    async addTodo(){
      if (this.nomePaciente.trim() === "") {
        alert('Campo "Nome" é obrigatório!');
        return;
      }
      if (this.dataMarc.trim() === "") {
        alert('Campo "Data" é obrigatório!');
        return;
      }
      if (this.horarioEnt.trim() === "") {
        alert('Campo "Das" (horário de entrada) é obrigatório!');
        return;
      }
      if (this.horarioSaida.trim() === "") {
        alert('Campo "Às" (horário de saída) é obrigatório!');
        return;
      }
      if (this.horarioSaida.trim() <= this.horarioEnt.trim()){
        alert('Horário de "Saída" não pode ser maior ou igual do que horário de "Entrada"!');
        return;
      }
      if (this.selected.trim() === "") {
        alert("Selecione um(a) Doutor(a)!");
        return;
      }
  
      axios
      .post(baseURL,  { nome: this.nomePaciente, dataMarc: this.dataMarc, horarioEnt: this.horarioEnt, horarioSaida: this.horarioSaida, selected: this.selected })

      .then((response) => (this.info = response.data));

      this.nomePaciente = "";
      this.horarioEnt= "";
      this.horarioSaida = "";
      this.dataMarc = "";
      this.selected = "";

      alert("Sucesso ao cadastrar!");

    },
  },
  mounted() {
  //Lista Doutores
  axios
      .get("http://localhost:3000/doutores")
      .then((response) => (this.doct = response.data));
  },
  
};
</script>

