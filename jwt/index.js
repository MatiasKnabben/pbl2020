//index.js
require("dotenv-safe").config();
var jwt = require('jsonwebtoken');
var http = require('http'); 
const express = require('express') 
const app = express() 
var cookieParser = require('cookie-parser'); 
const bodyParser = require('body-parser');
const mysql = require("mysql");
const { text } = require("body-parser");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cookieParser()); 
 
app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})
 
app.get('/usuarios', (req, res, next) => { 
    console.log("Retornou todos clientes!");
    execSQLQuery("SELECT * FROM usuarios", res);
}) 

//authentication
app.post('/login', (req, res, next) => {
    //esse teste abaixo deve ser feito no seu banco de dados
  const user = {}
  user.login = req.body.login
  user.senha = req.body.senha

    if(login === Login && senha === Senha){
      //auth ok
      const id = 1;
      var token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300 // expires in 5min
      });
      return res.json({ auth: true, token: token });
    }
    
    res.status(500).json({message: 'Login inválido!'});
})

app.post('/logout', function(req, res) {
    res.json({ auth: false, token: null });
})

function verifyJWT(req, res, next){
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
}
 
var server = http.createServer(app); 
server.listen(3050);
console.log("Servidor escutando na porta 3050...")

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