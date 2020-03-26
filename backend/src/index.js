const express = require('express')
const cors = require('cors')
const routes = require('./routes');

const app = express()

app.use(cors());

app.use(express.json())
app.use(routes)

app.listen(3333);




/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação do back-end 
 * PUT: Alterar uma informação do back-end 
 * DELETE: Delear uma informação do back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recurs 
 */