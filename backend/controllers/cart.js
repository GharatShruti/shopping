const { Cart } = require('../models/cart')
const { Product } = require('../models/product');
const { User } = require('../models/user');


const createCart = async (req, res) => {
    try {
        const { productId } = req.params;
        console.log("this is" ,productId)
        const { quantity } = req.body;
        const user = req.user.user._id;
        // console.log('req.user._id', req.user.user._id)

        const product =await Product.findById(productId);
        console.log("this is me" ,product)
        if (!product) {
            res.status(401).json({ message: "product no found" })
            return
        }
        console.log("shruti",product)
        console.log("first",user)
        // const existingUser = await User.findById(user);
        // console.log("this is exist",existingUser)

        // if (!existingUser) {
        //     res.status(401).json({ message: "user no found" })
        // }



        const cart = await Cart.create({
            productId: productId,
            UserId: user,
            quantity: quantity,
            TotalPrice: quantity * Number(product.price)
        })

        res.status(201).json({ message: "cart created succedfully", cart: cart })
    } catch (error) {
        console.log(error)
        res.status(501).json({ error: error })
    }
}


const getCart = async (req, res) => {
    try {
        const cart = await Cart.find().populate('productId')
            .populate('UserId')
        res.status(200).json({ cart: cart })
    } catch (error) {
        console.log(error)
        res.status(501).json({ error: error })
    }
}


module.exports = {
    createCart,
    getCart
}
