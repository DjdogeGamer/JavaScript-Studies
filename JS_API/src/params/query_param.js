/*
localhost:3000?nome=gustavo&cidade=recife
*/

const express = require(express)

const app = express()

app.listen('3000')

app.route('/').get( (req, res) => res.send( req.query.nome ) )