const express = require('express')
const routes = express.router()

//primeira rota
routes.get('/', (req, res) => {
    // Product.creat({
    //     title: 'react native',
    //     description: 'build native apps with React',
    //     url: 'https://github.com/facebook/react-native'
    // })
        
    return res.send('hello ergow')
})

module.exports = routes