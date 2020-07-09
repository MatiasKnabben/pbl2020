<template>

    <div class="list-group" style="max-width: 50%;">
      <div>
        <input type="text" class="form-control" v-model="data">
      </div>
      <span>{{ data | moment("dddd, MMMM YYYY") }}</span>
      <button type="button" @click="getDataFromServer()">Get Data</button>

      <button type="button" @click="saveDataToServer()">Send Data</button>
    </div>

</template>

<script>
import moment from "vue-moment";

export default {
  name: "testeFormat",
  data() {
    return {
      data: '',
      date: null,
    };
  },
  methods: {
    getDataFromServer: function() {
      //ajaxCall to get data from server

      //let's pretend the received date data was saved in a variable (serverDate)
      //let's hardcode for this ex.
      var serverDate = '2015-06-26';

      //format it and save to vue data property
      this.date = this.frontEndDateFormat(serverDate);
    },
    saveDataToServer: function() {
      //format data first before sending it back to server
      var serverDate = this.backEndDateFormat(this.date);

      //ajax call sending formatted data (serverDate)

      //will output an alert for this ex.
      alert(serverDate);
    },

    frontEndDateFormat: function(date) {
      return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
    },
    backEndDateFormat: function(date) {
      return moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
    },

  },
};
</script>

<style scoped>
div {
  margin-bottom: 20px;
}
input {
  padding: 5px 10px; font-size:16px;
}
button {
  padding: 10px 20px; border-radius:0;
}
</style>