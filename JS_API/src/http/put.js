const express = require('express')

const app = express()

app.listen('3000')

//Middleware
app.use(express.json())

let author = "Guga"

app.route('/').put( (req, res) => {
    author = req.body.author
    res.send(author)
} )
