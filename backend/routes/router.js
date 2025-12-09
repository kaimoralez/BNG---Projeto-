const express = require('express')
const adminController = require('../controllers/adminController')
const router = express.Router()



router.get('/', adminController.listarProdutos)
router.post('/cadastrar-produtos', adminController.cadastrarProdutos)
router.put('/alterar-produtos/:id', adminController.alterarProdutos)
router.delete('/deletar-produtos/:id', adminController.deletarProdutos)


module.exports = router