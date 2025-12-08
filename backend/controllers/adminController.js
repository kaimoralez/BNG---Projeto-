const Produtos = require("../models/produtoModel")

class adminController {

    static async listarProdutos(req, res) {
        try {
            const produtos = await Produtos.findAll()
            res.json(produtos)
        } catch (err) {
            res.json({ message: "Não foi possível cadastrar a música" })
        }
    }

    static async cadastrarProdutos(req, res) {
        try {
            const { nome, preco, tamanho, img_1, img_2, img_3, img_4, descricao } = req.body
            const novoProduto = await Produtos.create({ nome, preco, tamanho, img_1, img_2, img_3, img_4, descricao })

            res.json({ message: "Produto cadastrado com sucesso", dados: novoProduto });
        } catch (err) {
            console.log(err);
            res.json({ message: "Erro ao cadastrar produto" })
        }
    }

    static async alterarProdutos(req, res) {
        try {
            const id = req.params.id
            const novoProduto = req.body
            const produtoSelecionado = await Produtos.findByPk(id)
            const produtoAlterado = await produtoSelecionado.update(novoProduto)

            res.json({ message: "Produto alterado com sucesso", dados: produtoAlterado })

        } catch (err) {
            res.json({ message: "Não foi possível alterar a música" })
        }
    }

    static async deletarProdutos(req, res) {
        try {
            const id = req.params.id
            const produtoSelecionado = await Produtos.findByPk(id)
            await produtoSelecionado.destroy()

            res.json({ message: "Produto deletado com sucesso" })
        } catch (err) {
            res.json({ message: "Não foi possível deletar o produto" })
        }
    }
}


module.exports = adminController