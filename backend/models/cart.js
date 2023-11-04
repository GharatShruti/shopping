const mongoose = require('mongoose')
const { User } = require('../models/user')
const { Product } = require('../models/product')


const cartSchema = mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: "Product"
    },
    UserId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    quantity: {
        type: Number,
        default: 1
    },
    TotalPrice: {
        type: Number
    }
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = {
    Cart
}