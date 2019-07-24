const express = require('express')
const routes = express.router()

const ProductController = require('../ProductController')

routes.get("/products", ProductController.index)
routes.post('/products', ProductController.store)

module.exports = routes