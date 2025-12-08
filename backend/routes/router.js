const express = require('express')
const router = express.Router()
const Produtos = require('../models/produtoModel')


router.get('/', async (req, res) => {
    try {
        const produtos = await Produtos.findAll()
        res.json(produtos)
    } catch (err) {
        res.json({ message: "Não foi possível cadastrar a música" })
    }

})

router.post('/', async (req, res) => {
    try {
        const { nome, preco, tamanho, img_1, img_2, img_3, img_4, descricao } = req.body
        const novoProduto = await Produtos.create({ nome, preco, tamanho, img_1, img_2, img_3, img_4, descricao })

        res.json({ message: "Produto cadastrado com sucesso", dados: novoProduto});
    } catch (err) {
        console.log(err);
        res.json({ message: "Erro ao cadastrar produto"})
    }

})



module.exports = router 