const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please select the order']
    },
    description: {
        type: String,
        required: [true, 'description is required']
    },
    price: {
         type: Number,
         required: [true, 'Please select the Price']
    },
    stock: {
        type: String, 
        required: [true, 'Stock is required']
    }
}) 
module.exports = mongoose.model('Order', orderSchema)