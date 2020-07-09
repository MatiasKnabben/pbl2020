const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000; //porta padrão
const mysql = require("mysql");
const { response } = require("express");
//const { values } = require("core-js/fn/array");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  res.header(
    "Access-Control-Allow-Methods", 
    "GET, POST, PUT, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers", 
    "Content-Type"
  );
  res.header(
    "Access-Control-Max-Age", 
    "1"
  );
  next();
});

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

//definindo as rotas
const router = express.Router();
router.get("/", (req, res) => res.json({ message: "Funcionando!" }));
app.use("/", router);

//inicia o servidor
app.listen(port);
console.log("API funcionando!");

//Lista todos os Agendamentos
router.get("/agenda", (req, res) => {
  execSQLQuery("SELECT * FROM agendamento", res);
});
//Adicionar um paciente na agenda
router.post("/agenda", (req, res) => {
  const agenda = {}
  agenda.dataMarc = req.body.dataMarc
  agenda.horarioEnt = req.body.horarioEnt
  agenda.horarioSaida = req.body.horarioSaida
  agenda.nome = req.body.nome
  agenda.selected = req.body.selected

  execSQLQuery(
    `INSERT INTO agendamento(NomePaciente, Data, HorarioEnt, HorarioSaida, doutor) VALUES('${agenda.nome}','${agenda.dataMarc}','${agenda.horarioEnt}','${agenda.horarioSaida}','${agenda.selected}')`,
    res
  );
});
//Deletar
router.delete("/agenda/:id", (req, res) => {
  execSQLQuery("DELETE FROM agendamento WHERE ID =" + parseInt(req.params.id), res);
});

router.get("/agenda/list", (req, res) => {

 const dataBusca = req.body.dataBusca;

  execSQLQuery(`SELECT * FROM agendamento WHERE Data ='${dataBusca}'`, res);

  console.log(dataBusca);

});

//Lista todos os Doutores
router.get("/doutores", (req, res) => {
  execSQLQuery("SELECT * FROM doutores", res);
});
//Adicionar um Doutor
router.post("/doutores", (req, res) => {
  const nome = req.body.nome.substring(0, 150);
  const crm = req.body.crm.substring(0, 10);
  const uf = req.body.uf.substring(0, 2);
  execSQLQuery(
    `INSERT INTO doutores(Nome, CRM, UF) VALUES('${nome}','${crm}','${uf}')`,
    res
  );
});
//Delete Doutor
router.delete("/doutores/:id", (req, res) => {
  execSQLQuery("DELETE FROM doutores WHERE ID =" + parseInt(req.params.id), res);
});



//users
router.get("/users", (req, res) => {
  execSQLQuery("SELECT * FROM usuarios WHERE ID=" + 1, res);
});


function execSQLQuery(sqlQry, res) {
  const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    database: "pblagenda",
  });

  connection.query(sqlQry, function(error, results, fields) {
    if (error) res.json(error);
    else res.json(results);
    connection.end();
    console.log("executou!");
  });
}
