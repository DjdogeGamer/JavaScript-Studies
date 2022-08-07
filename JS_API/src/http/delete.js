const express = require('express')

const app = express()

app.listen('3000')

app.use(express.json())

app.route('/:id').delete( (req, res) => {
    res.send(req.params.id)
} )

/*
localhost:3000/valor
*/