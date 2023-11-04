
const express = require('express')
const { creatProduct,getProducts } = require('../controllers/product')
const router = express.Router()

router.post('/create', creatProduct)
router.get('/get', getProducts)

module.exports = router
