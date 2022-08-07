// Json
/* 
{
    "nome":"Seu nome",
    "cidade":"Sua cidade"
}
*/

const express = require('express')

const app = express()

app.listen('3000')

//Middleware
app.use(express.json())

app.route('/').post( (req, res) => {
    const {nome, cidade} = req.body
    res.send(nome, cidade)
})
