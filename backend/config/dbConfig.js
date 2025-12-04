const sequelize = require ('sequelize')

const conexao = new sequelize('bng', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

async function testeDeConexao(){
    try{
        await conexao.authenticate()
        console.log("Banco de dados conectado com sucesso")
    }catch(err){
        console.log("Erro ao conectar com o banco de dados")
    }
}

testeDeConexao()

module.exports = conexao;