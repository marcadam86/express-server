const express = require('express')
const router = express.Router()

const { getProducts, getSingleProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController')

//createProduct => /api/v1/product/new
router.route('/product/new').post(createProduct)

//getProducts => /api/v1/products
router.route('/products').get(getProducts)

//getSingleProduct => /api/v1/product/:id
router.route('/product/:id').get(getSingleProduct)

//getProducts => /api/v1/products/delete/:id
router.route('/products/delete/:id').get(deleteProduct)

//getProducts => /api/v1/products/update/:id
router.route('/products/update/:id').put(updateProduct)

// // app.get('/products', (req, res) => {
// //     res.status(200).json({
// //         success: true,
// //         message: 'This is Product route'
// //     })
// // })

module.exports = router
