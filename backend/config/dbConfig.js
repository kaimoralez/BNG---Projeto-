const { Sequelize } = require('sequelize');

const database = new Sequelize(
    "defaultdb",
    "avnadmin",
    "AVNS_LmiB1NZqRe5uUOm9zRD",
    {
        host: "bng-kapconc2009-a8a7.c.aivencloud.com",
        port: 14106,
        dialect: "mysql",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        logging: false
    }
);

async function testarConexao(){
	try {
        await database.authenticate();
        console.log("🔥 Banco conectado com sucesso!");
    } catch (err) {
        console.error("❌ Erro ao conectar com o banco:");
        console.error(err);
    }
}

testarConexao()

module.exports = database;
