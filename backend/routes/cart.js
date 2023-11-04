const express = require('express')
const { createCart, getCart } = require('../controllers/cart')
// const { verifyToken } = require('../middleware/validateToken')
const {verifytoken, verifyToken} = require('../middleware/verifyJWT')

const router = express.Router()

router.post('/create/:productId',verifyToken, createCart)
router.get('/get',verifyToken, getCart)

module.exports = router