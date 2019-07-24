const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {
    async index(req,res) {//lista todos os registros da base de dados
        const produtos = await Product.find()
        return res.json(produtos)
    }
}