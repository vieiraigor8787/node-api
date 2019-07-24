const express = require('express');
const requireDir = require('require-dir')

//iniciando o app
const app = express()
app.use(express.json())

//iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    { useNewUrlParser: true }
)
//registrando o modulo product
requireDir('./src/models')

//rotas
app.use('/api', require('./src/routes'))

app.listen(3001)