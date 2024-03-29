const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {
    async index(req,res) {//lista todos os registros da base de dados
        const { page } = req.query //query => parametros GET
        const produtos = await Product.paginate( {/*condições, filtros...*/}, {page, limit: 10} )
        return res.json(produtos)
    },

    async show(req, res) { //detalhe
        const product = await Product.findById(req.params.id) //id definidos em rota
        return res.json(product)
    },

    async store(req,res) { //criação = Post
        const product = await Product.create(req.body) //corpo da requisição
        return res.json(product)
    },

    async update(req,res) { //put
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true } /*mangoose retorna o produto atualizado pra variavel product*/ )
        return res.json(product)
    },

    async destroy(req,res) { //excluindo
        await Product.findByIdAndRemove(req.params.id)
        return res.send()
    }
}