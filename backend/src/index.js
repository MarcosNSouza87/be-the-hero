const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use( express.json() );
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

 /*
 * Metodos HTTP:
 * GET : Buscar/Listar uma informação no back-end
 * PPOST: Criar uma informação no back-end
 * PUT : Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * tipos de parametros:
  * 
  * Query Params: parametros nomeados enviados na rota apos o simbolo "?" servem para filtros, paginação
  * Route Params: parametros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  * SQL : MySQL , SQLite, PostgreSQL, Oracle, Microsoft SQL Server,
  * NoSQL: MongoDB, CouchDB, etc,
  * 
 */


 /**
  * Driver : SELECT * FROM users
  * QueryBuilder: table('users).select('*').where()
  */



