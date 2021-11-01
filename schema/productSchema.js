// this file will be required in the file where business logic is being handled i.e productController
const mongooose = require('mongoose')

// Defined Schema
// const productSchema = new mongooose.Schema({
//     title: String,
//     description: String,
//     image: String,
//     price: Number,
//     stock: Number
// })

// Schema-level validation
const productSchema = new mongooose.Schema({
    title: {
        type: String,
        required: [true, 'Please Enter the title of the product'],
    },
    description: {
        type: String,
        required: [true, 'Please Enter description']
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: [true, 'Please Enter Price'],
        min: [100, 'the price must have value above 100']
    },
    stock: {
        type: Number,
        required: [true, 'Please specify number of stock'],
        min: [5, 'Stock can not be less than 10'],
        max: 15
    },
})

// Now modeling/mapping with DB
module.exports = mongooose.model('Product', productSchema)

// -- we want to save this sort of data in DB using mongoose
// {
//     "title": "Krunch Burger",
//     "slug": "krunch-burger",
//     "image": "/images/products/Bone-kfc.png",
//     "description": "Enjoy the crispy chicken fillet in a soft bun with spicy mayo and our signature sauce with fresh lettuce.",
//     "price": 195,
//     "stock": 10,
//     "category": "everyday-value"
// }