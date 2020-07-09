<template>
  <div class="container">
    <div class="list-group llist">
      <b-container class="bv-example-row mb-2">
        <b-row cols="6">
          <b-col md="2" class="list-group-item">
            <p>Nome</p>
          </b-col>
          <b-col md="2" class="list-group-item">
            <p>Data</p>
          </b-col>
          <b-col md="2" class="list-group-item">
            <p>Das</p>
          </b-col>
          <b-col md="2" class="list-group-item">
            <p>às</p>
          </b-col>
          <b-col md="2" class="list-group-item">
            <p>Doutor(a)</p>
          </b-col>
        </b-row>
      </b-container>
     <form>

      <div v-for="pacientes in info" v-bind:key="pacientes">
        <b-container class="bv-example-row mb-2">
          <b-row cols="6">
            <b-col md="2" class="list-group-item">
              <p class="comment_author">
                <strong>{{ pacientes.NomePaciente }}</strong>
              </p>
            </b-col>
            <b-col md="2" class="list-group-item">
              <p>
                <strong>{{ pacientes.Data | moment("DD/MM/YYYY") }}</strong>
              </p>
            </b-col>
            
            <b-col md="2" class="list-group-item">
              <p>
                <strong>{{ pacientes.HorarioEnt | moment("HH:mm") }}</strong>
              </p>
            </b-col>
            <b-col md="2" class="list-group-item">
              <p>
                <strong>{{ pacientes.HorarioSaida | moment("HH:mm") }}</strong>
              </p>
            </b-col>
          <b-col md="2" class="list-group-item">
              <p>
                <strong>{{ pacientes.doutor }}</strong>
              </p>
            </b-col>
          
            <b-col md="2" class="list-group-item">
              <button class="btn btn-danger"
                title="Excluir"
                v-on:click.prevent="removePaciente(pacientes.ID)"
                >Excluir</button
              >
            </b-col>
          </b-row>
        </b-container>
      </div> 
      </form> 
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {

  data() {
    return {
      pacientes: [],
      info: null,
    };
  },

  methods: {
    removePaciente(ID){

    axios
    .delete("http://localhost:3000/agenda/"+ ID) 

    alert('Sucesso ao excluir!');
}
},
  mounted() {
    axios
      .get("http://localhost:3000/agenda")
      .then((response) => (this.info = response.data));
  },
};
</script>

<style scoped>
.llist{
width: 100%;
height: 700px;
position: relative;
float: right;
overflow: auto;
}
</style>