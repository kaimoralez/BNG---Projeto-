const express = require('express')
const cors = require('cors')
const router = require('./routes/router')

const app = express()


app.use(express.json())
app.use(cors())
app.use('/', router)

const produtosRoutes = require('./routes/router')

app.use('/produtos', produtosRoutes)

const port = 8081

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

