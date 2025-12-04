const express = require ('express');
const adminController = require('../controllers/adminController');
const router = express.Router()

router.get('/', adminController.listarProdutosHome)
router.get('/teste', adminController.listarProdutosFeminos)

module.exports = router