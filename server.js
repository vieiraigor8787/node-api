const express = require('express');
const requireDir = require('require-dir')

//iniciando o app
const app = express()

//iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    { useNewUrlParser: true }
)
//registrando o modulo product
requireDir('./src/models')

//primeira rota
app.get('/', (req, res) => {
    Product.creat({
        title: 'react native',
        description: 'build native apps with React',
        url: 'https://github.com/facebook/react-native'
    })
        
    return res.send('hello ergow')
})

app.listen(3001)