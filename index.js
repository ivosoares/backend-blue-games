// inciar a configuracao da variavel de ambiente
if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// importar as bibliotecas/libs necessarias
const express = require('express');
const cors = require('cors');
// importo o arquivo de conexao para poder acessar a funcao.
const Conn = require('./conn/conn');
const gamesRouter = require("./routes/games.routes");

// inicializar o express
const app = express();

//declaro os middlewares
app.use(express.json());
app.use(cors());

app.use("/games", gamesRouter);


// busco os dados das variaveis de ambiente
const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;
// chamo a conexao com o banco de dados
Conn(db_url, db_user, db_pass, db_data);

// defino a porta e iniclizo o servidor
const port = 3001;
app.listen(port, () => {
  console.log(`Servidor inicializado na porta ${port}`);
})


// MVC
// MODEL - É O RESPONSAVEL PELOS DADOS E FUNCOES DO BANCO DE DADOS
// VIEW - É A VISAO DO CLIENNTE OU SEJA (HTML, APP, SMARTWATCH, SMART TV, VUE, REACT, ANGULAR)
// CONTROLLER - É RESPONSAVEL POR GERENCIAR OS FLUXOS E DAS REGRAS DO SISTEMA.
// ROTAS - SAO OS RESPONSAVEIS PELOS ENDPOINTS E METODOS DA API (GET/POST/PUT/DELETE)
// SERVICOS - RESPONSAVEIS POR SE CONECTAR AO NOSSO MODEL PARA CHAMAR AS FUNCOES DO BANCO DE DADOS (LIDA COM DADOS)