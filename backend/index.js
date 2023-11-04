const express = require('express')
const { Connection } = require('./db')
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart')
const cors = require('cors')




const app = express()

app.listen(8070, () => {
    console.log("server started")
})

app.use(express.json())
app.use(cors())
Connection();

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/product', productRoutes)
app.use('/api/v1/cart', cartRoutes)
