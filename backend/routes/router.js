const express = require('express')
const adminController = require('../controllers/adminController')
const router = express.Router()



router.get('/', adminController.listarProdutos)
router.post('/cadastrar-produtos', adminController.cadastrarProdutos)
router.put('/alterar-produtos', adminController.alterarProdutos)
router.delete('/deletar-produtos', adminController.deletarProdutos)


module.exports = router