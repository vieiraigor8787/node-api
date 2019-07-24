const express = require('express');

const app = express()

// iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    { useNewUrlParser: true }
)

app.get('/', (req, res) => {
    res.send('hello ergow')
})

app.listen(3001)