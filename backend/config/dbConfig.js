const sequelize = require ('sequelize')

const conexao = new sequelize('defaultdb', 'avnadmin', '',{
    host: 'bng-kapconc2009-a8a7.c.aivencloud.com',
    port: '14106',
    dialect: 'mysql',
    dialectOptions:{
        ssl:{
            require:true,
            rejectUnauthorized: false
        }
    },
    logging:false
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