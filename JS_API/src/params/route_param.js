const express = require(express)

const app = express()

app.listen('3000')

app.route('/').get( (req, res) => res.send('Oi'))
app.route('/:nome').get( (req, res) => res.send(req.params.nome))
