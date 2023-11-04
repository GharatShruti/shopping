const mongoose = require('mongoose')


const url = `mongodb://127.0.0.1/shruu`

const Connection = () => {
    mongoose.connect(url).then(() => {
        console.log("DB connected!")
    })
}

module.exports = {
    Connection
}