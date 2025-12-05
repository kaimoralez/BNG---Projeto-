const Produtos = require("../models/produtoModel") 

class adminController{

    static async listarProdutosHome(req,res){
        res.json({message: "Listar produtos"})
    }

    // static async listarProdutosFeminos(req,res){
    //     let produtos = await Produtos.findAll()
    //     // res.json({message: "Listar produtos"})
    //     res.json(produtos) 
    // }

    static async CadastrarNovoProduto(req,res){
        try{
            const {nome, valor, tamanho, img_1, img_2, img_3 ,img_4} = req.body
            const novoProduto = await Produtos.create({nome, valor, tamanho, img_1, img_2, img_3 ,img_4})
            res.json({message: "Produtos cadastrado com sucesso", dados:novoProduto})
        }catch(err){
            res.json({message:"Não foi possível cadastrar o produto"})
        }
    }

}

module.exports = adminController