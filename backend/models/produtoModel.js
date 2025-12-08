const conexao = require('../config/dbConfig')
const { DataTypes } = require('sequelize')

const Produtos = conexao.define('produtos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    preco: {
        type: DataTypes.DOUBLE
    },
    tamanho: {
        type: DataTypes.STRING
    },
    img_1: {
        type: DataTypes.STRING
    },
    img_2: {
        type: DataTypes.STRING
    },
    img_3: {
        type: DataTypes.STRING
    },
    img_4: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
    
})

Produtos.sync()

module.exports = Produtos;

